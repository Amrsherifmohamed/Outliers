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
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        private readonly DataContext _context;
        private readonly IOutliersRepository _repo;
        public CompanyController(IOutliersRepository repo, IMapper mapper, DataContext context, UserManager<User> userManager)
        {
            _userManager = userManager;
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }

        [HttpGet("{id}", Name = "GetJob")]
        public async Task<IActionResult> GetJob(int id)
        {
            var job = await _repo.GetJob(id);
            var JobToReturn = _mapper.Map<JobForDetailsDto>(job);
            return Ok(JobToReturn);
        }


        [HttpGet]
        public async Task<IActionResult> GetJobs()
        {
            // var currentUserId=int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            // var user=await _repo.GetUser(currentUserId,true);
            var jobs = await _repo.GetJobs();
            var jobsToReturn = _mapper.Map<IEnumerable<JobForListDto>>(jobs);
            return Ok(jobsToReturn);
        }

        [HttpPost("addjob/{id}")]
        public async Task<IActionResult> AddJob(int id, [FromBody] JobForCreationDto jobForCreationDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            jobForCreationDto.UserId = id;
            var job = _mapper.Map<Job>(jobForCreationDto);
            _repo.Add(job);


            if (await _repo.SaveAll())
            {
                var jobToReturn = _mapper.Map<JobToReturnDto>(job);
                return CreatedAtRoute("GetJob", new { id = job.Id }, jobToReturn);
            }
            throw new Exception("Field To Create Post");
        }

    
        [HttpPut("updatejob/{id}")]
        public async Task<IActionResult> UpdateJob([FromRoute] int id, [FromBody] JobForUpdateDto jobForUpdateDto)
        {
            // if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            //     return Unauthorized();

            var jobFromRepo = await _repo.GetJob(id);
            _mapper.Map(jobForUpdateDto, jobFromRepo);

            if (await _repo.SaveAll())
                return NoContent();
            throw new Exception($"حدثت مشكلة في تعديل بيانات المشترك رقم {id}");

        }

        [HttpDelete("deletejob/{id}")]
        public async Task<IActionResult> DeleteJob([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var findProduct = await _context.Job.FindAsync(id);

            if (findProduct == null)
            {
                return NotFound();
            }
            _context.Job.Remove(findProduct);
            await _context.SaveChangesAsync();
            return Ok(new JsonResult("The Product with id " + id + " is Deleted."));
        }

        [HttpPost("apply/{id}")]
        public async Task<IActionResult> Apply(int id, [FromBody] ApplyForJob formdata)
        {
            // var user = await _userManager.FindByNameAsync(userName);
            var job = await _repo.GetJob(id);
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(currentUserId, true);
            var check = _context.ApplyForJob.Where(a => a.JobId == id && a.UserId == user.Id).ToList();
            if (check.Count < 1)
            {
                var apply = new ApplyForJob
                {
                    JobId = id,
                    UserId = user.Id,
                    Msg = formdata.Msg,
                    ApplyDate = DateTime.Now,
                    UserName = user.KnownAs,
                    JobTitle = job.JobTitle,

                };
                await _context.ApplyForJob.AddAsync(apply);
                await _context.SaveChangesAsync();
                return Ok(new JsonResult("The Product was Added Successfully"));
            }

            return Ok(new JsonResult("The Product was Added Before"));
        }

        [HttpGet("getmyJops/{userName}")]//user
        public async Task<ActionResult> GetMyJopsIsApplied(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            var jops = _context.ApplyForJob.Where(a => a.UserId == user.Id);
            return Ok(jops.ToList());
        }
          [HttpGet("getmypostedjob")]
        public async Task<IActionResult> GetMyPostedJob()
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(currentUserId,true);
            var jobs = await _repo.GetJobs();
            var jobsToReturn = _mapper.Map<IEnumerable<JobForDetailsDto>>(jobs);
            return Ok(jobsToReturn.Where(a => a.UserId == user.Id).ToList());
        }


        [HttpGet("mysponser")]//company
        public async Task<ActionResult> MySponserApplied()
        {
            // var user = await _userManager.FindByNameAsync(userName);
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(currentUserId, true);
            var Jops = from app in _context.ApplyForJob
                       join jop in _context.Job
                       on app.JobId equals jop.Id
                       where jop.User.Id == user.Id
                       select app;

            return Ok(Jops.ToList());
        }

    }
}