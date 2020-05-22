using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OutliersAPP.API.Dtos;
using OutliersAPP.API.Models;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using OutliersAPP.API.Data;
using System.IO;


namespace OutliersAPP.API.Controllers
{
    // [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class PlaylistController : ControllerBase
    {
        private readonly IOutliersRepository _repo;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly DataContext _context;

        public PlaylistController(IOutliersRepository repo, DataContext context, IMapper mapper, UserManager<User> userManager)
        {
            _mapper = mapper;
            _repo = repo;
            _userManager = userManager;
            _context = context;

        }
        
        [HttpGet("getplaylist/{id}", Name = "GetPlaylist")]
        public async Task<IActionResult> GetPlaylist(int id)
        {
            var Playlist = await _repo.GetPlaylist(id);
          //  if(Playlist!=null){
            var PlaylistToReturn = _mapper.Map<PlaylistForDetailsDto>(Playlist);
            return Ok(PlaylistToReturn);
            //}
            
        }
        [HttpGet("{category}")]
        public async Task<IActionResult> Getplaylistsamecategory(string category){
            var playlist=await _repo.Getplaylistsamecategory(category);
            var PlaylistToReturn = _mapper.Map<IEnumerable<PlaylistForDetailsDto>>(playlist);
            return Ok(PlaylistToReturn);
        }
        [HttpGet("myplaylists")]//user
       public async Task<IActionResult> Getmyplaylists()
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(currentUserId,true);
            var playlists = await _repo.GetPlaylists();
            var playlistsToReturn = _mapper.Map<IEnumerable<PlaylistForDetailsDto>>(playlists);
            return Ok(playlistsToReturn.Where(a => a.UserId == user.Id).ToList());
        }
        [HttpPost("addplaylist/{id}")]
        public async Task<IActionResult> Addplaylist(int id, [FromBody] PlaylistForCreationDto playlistForCreationDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            playlistForCreationDto.UserId = id;
            var playlist = _mapper.Map<playlist>(playlistForCreationDto);

            _repo.Add(playlist);
            if (await _repo.SaveAll())
            {
                var playlistToReturn = _mapper.Map<PlaylistToReturnDto>(playlist);
                return CreatedAtRoute("GetPlaylist", new { id = playlist.Id }, playlistToReturn);
            }
            throw new Exception("Field To Create Post");
        }
        [HttpDelete("deleteplaylist/{id}")]
        public async Task<IActionResult> DeletePlaylist([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var findPlaylist = await _context.Playlists.FindAsync(id);

            if (findPlaylist == null)
            {
                return NotFound();
            }
            _context.Playlists.Remove(findPlaylist);
            await _context.SaveChangesAsync();
            return Ok(new JsonResult("The Product with id " + id + " is Deleted."));
        }

        [HttpPut("updateplaylist/{id}")]
        public async Task<IActionResult> UpdatePlaylist([FromRoute] int id, [FromBody] PlaylistForUpdateDto playlistForUpdateDto)
        {
            var playlistFromRepo = await _repo.GetPlaylist(id);
            _mapper.Map(playlistForUpdateDto, playlistFromRepo);
            if (await _repo.SaveAll())
                return NoContent();
            throw new Exception($"Error when updated {id}");

        }
        [HttpGet("Getvideoforplaylist/{id}")]
        public async Task<IActionResult> getvideoforplaylist(int id){
            var Videos = await _repo.getvideoforplaylist(id);
            var VideosToReturn = _mapper.Map<PlaylistForDetailsDto>(Videos);
            return Ok(VideosToReturn);
        }
    }
}