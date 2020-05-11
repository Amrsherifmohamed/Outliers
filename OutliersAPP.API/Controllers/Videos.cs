using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using Microsoft.AspNetCore.Authorization;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using OutliersAPP.API.Data;
using OutliersAPP.API.Dtos;
using OutliersAPP.API.Helpers;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {
        private Cloudinary _cloudinary;
        private readonly IOutliersRepository _repository;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private readonly IMapper _mapper;
        public VideosController(IOutliersRepository repository, IOptions<CloudinarySettings> cloudinaryConfig, IMapper mapper)
        {
            _mapper = mapper;
            _cloudinaryConfig = cloudinaryConfig;
            _repository = repository;
            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );
            _cloudinary = new Cloudinary(acc);

        }
        [HttpGet("{id}", Name = "GetVideo")]
        public async Task<IActionResult> GetVideo(int id)
        {
            var VideoFromRepository = await _repository.GetVideo(id);
            var Video = _mapper.Map<VideoForReturnDto>(VideoFromRepository);
            return Ok(Video);
        }

        [HttpPost("addvideo/{userId}/{id}")]
        public async Task<IActionResult> Addvideo(int userId,int id ,[FromForm]VideoForCreationDto videoForCreationDto)
        {

            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            
            
             videoForCreationDto.UserId = userId;
            // var userFromRepo = await _repository.GetUser(userId, true);
            var file = videoForCreationDto.File;
           var uploadResult = new VideoUploadResult();
            if (file != null && file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new VideoUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation()
                       .Width(300).Height(200).Crop("crop")
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            videoForCreationDto.Url = uploadResult.Uri.ToString();

            videoForCreationDto.publicId = uploadResult.PublicId;
            videoForCreationDto.PlaylistId = id;

            var Video = _mapper.Map<video>(videoForCreationDto);
             _repository.Add(Video);
            // userFromRepo.videos.Add(Video);

            if (await _repository.SaveAll())
            {
                var VideosToReturn = _mapper.Map<VideoForReturnDto>(Video);
                return CreatedAtRoute("GetVideo", new { id = Video.Id }, VideosToReturn);
            }
            return BadRequest("خطأ في إضافة الفيديو");

        }

    }
}