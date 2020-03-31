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
    [ServiceFilter(typeof(LogUserActivity))]
    [Route("api/users/{userId}/Posts")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IOutliersRepository _repo;
        private readonly IMapper _mapper;
        public PostsController(IOutliersRepository repo,IMapper mapper)
        {
            _repo=repo;
            _mapper=mapper;
        }
         [HttpGet]
        public async Task<IActionResult> getposts(int userId)
        {
            // if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            //  return Unauthorized();
        //      var userFromRepo = await _repo.GetUser(userId,true);
        //    if(!userFromRepo.Posts.Any(P=>P.Id==id))
        //      return Unauthorized();
            var posts = await _repo.GetPosts(userId);
            var PostToReturn = _mapper.Map<IEnumerable<PostForListDto>>(posts);
            return Ok(PostToReturn);
        }
        
        [HttpGet("{id}",Name = "GetPost")]
        public async Task<IActionResult> getpost(int id)
        {
            var post = await _repo.getpost(id);
            var PostToReturn = _mapper.Map<PostForDetailsDto>(post);
            return Ok(PostToReturn);
        }
        [HttpPost]
        public async Task<IActionResult> CreatePost(int userId,PostForCreationDto postForCreationDto)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
             return Unauthorized();
            postForCreationDto.UserId=userId;
             var post = _mapper.Map<Post>(postForCreationDto); 
             _repo.Add(post);
             if(await _repo.SaveAll()){
                var postToReturn = _mapper.Map<PostToReturnDto>(post);
                return CreatedAtRoute("GetPost",new {id=post.Id},postToReturn);
             }
             throw new Exception("Field To Create Post");
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int userId,int id)
        {
           if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
             return Unauthorized();
           var postfromrepo= await _repo.getpostformuser(id,userId);
           if(postfromrepo == null)
           return Unauthorized();
         var post = await _repo.getpost(id);
        _repo.Delete(post);

        if(await _repo.SaveAll())
        return Ok();
        return BadRequest("Field to Delete Post");
        }
         [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int userId,int id, PostForUpdateDto postForUpdateDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
          var postrepo= await _repo.getpostformuser(id,userId);
           if(postrepo == null)
           return Unauthorized();
            var postFromRepo = await _repo.getpost(id);
            _mapper.Map(postForUpdateDto,postFromRepo);
            if (await _repo.SaveAll())
                return NoContent();
            throw new Exception($"field to update post {id}");
        }
        [HttpGet("Home")]
        public async Task<IActionResult> GetPostuserfollower(int userId){
            var posts = await _repo.GetPostsForFollwing(userId);
            var PostToReturn = _mapper.Map<IEnumerable<PostForListDto>>(posts);
            return Ok(PostToReturn);
        }
        
    }
}