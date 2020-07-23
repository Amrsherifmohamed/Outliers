using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OutliersAPP.API.Data;
using OutliersAPP.API.Dtos;
using OutliersAPP.API.Models;
using OutliersAPP.API.Helpers;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Security.Claims;

namespace OutliersAPP.API.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class RateController :ControllerBase
    {
        private readonly IOutliersRepository _repo;
        private readonly IMapper _mapper;
        public RateController(IOutliersRepository repo,IMapper mapper)
        {
            _repo=repo;
            _mapper=mapper;
        }
        [HttpGet("{playlistid}/playlist")]
        public async Task<IActionResult> getrats(int playlistid)
        {
            var playlist = await _repo.GetRates(playlistid);
            var rateToReturn = _mapper.Map<IEnumerable<RateForlistDto>>(playlist);
            return Ok(rateToReturn);
        }
        
        [HttpGet("{id}",Name = "GetRate")]
        public async Task<IActionResult> getrate(int id)
        {
            var post = await _repo.getoeneRate(id);
            var PostToReturn = _mapper.Map<RateForDetailsDto>(post);
            return Ok(PostToReturn);
        }
        [HttpGet("{userid}/{playlistid}",Name="getrates")]
        public async Task<IActionResult> getrate(int userid,int playlistid)
        {
            var rate = await _repo.getRateuser(userid,playlistid);
            var rateToReturn = _mapper.Map<RateForDetailsDto>(rate);
            return Ok(rateToReturn);
        }


        [HttpPost("{userid}/{playlistid}")]
        public async Task<IActionResult> CreatePost(int userid,int playlistid,RateForCreationsDto RateForCreationDto)
        {
            if(userid != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
             return Unauthorized();
             var ratenew = await _repo.getRateuser(userid,playlistid);
             if(ratenew!=null)
                 return BadRequest("you rateed this playlist");
            RateForCreationDto.userId=userid;
            RateForCreationDto.playlistId=playlistid;
             var rate = _mapper.Map<Rate>(RateForCreationDto); 
             _repo.Add(rate);
             if(await _repo.SaveAll()){
                var rateToReturn = _mapper.Map<RateForReturnDto>(rate);
                return CreatedAtRoute("getrates",new {userid=rate.UserId,playlistid=rate.playlistId},rateToReturn);
             }
             throw new Exception("Field To Create Post");
        }
        
    }
}