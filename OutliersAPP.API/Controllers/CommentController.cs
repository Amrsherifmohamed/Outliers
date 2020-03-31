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
    [Route("api/users/{userId}/Comment/{postId}")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly IOutliersRepository _repo;
        private readonly IMapper _mapper;
        public CommentController(IOutliersRepository repo,IMapper mapper)
        {
            _repo=repo;
            _mapper=mapper;
        }
        [HttpGet("{id}",Name = "GetComment")]
        public async Task<IActionResult> getComment(int id,int postId)
        {
            var Comment = await _repo.getComment(id,postId);
            var CommentToReturn = _mapper.Map<CommentForDetails>(Comment);
            return Ok(CommentToReturn);
        }
        [HttpPost]
        public async Task<IActionResult> CreateComment(int userId,int postId,CommentForCreationDto commentForCreationDto){
             if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
             return Unauthorized();
            commentForCreationDto.UserId=userId;
            commentForCreationDto.PostId=postId;
             var comment = _mapper.Map<Comment>(commentForCreationDto); 
             _repo.Add(comment);
             if(await _repo.SaveAll()){
                var commentToReturn = _mapper.Map<CommentForReturnDto>(comment);
                return CreatedAtRoute("GetComment",new {id=comment.Id},commentToReturn);
             }
             throw new Exception("Field To Create Comment");
        }
        [HttpGet]
        public async Task<IActionResult> GetComments(int postId)
        {
            var Comments = await _repo.GetComments(postId);
            var CommentsToReturn = _mapper.Map<IEnumerable<CommentForListDto>>(Comments);
            return Ok(CommentsToReturn);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(int id,int userId,int postId)
        {
           if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
             return Unauthorized();
           var commentrepo= await _repo.getcommentForuser(id,postId,userId);
             if(commentrepo==null)
             return Unauthorized();
         var Comment = await _repo.getComment(id,postId);
        _repo.Delete(Comment);
        if(await _repo.SaveAll())
        return Ok();
        return BadRequest("Field to Delete Post");
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int userId,int id,int postId, CommentForUpdateDto commentForUpdateDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
           var commentrepo= await _repo.getcommentForuser(id,postId,userId);
             if(commentrepo==null)
             return Unauthorized();
            var CommentFromRepo = await _repo.getComment(id,postId);
            _mapper.Map(commentForUpdateDto,CommentFromRepo);
            if (await _repo.SaveAll())
                return NoContent();
            throw new Exception($"field to update post {id}");
        }
         [HttpGet("getnucomment")]
        public async Task<IActionResult> Getnumbetofcomment(int postId){
            var count = await _repo.Getnumberofcomment(postId);
            return Ok(count);
        }
    }
}