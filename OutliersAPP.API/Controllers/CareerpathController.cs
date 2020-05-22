using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OutliersAPP.API.Dtos;
using OutliersAPP.API.Models;
using System;
using AutoMapper;
using System.Collections.Generic;
using OutliersAPP.API.Data;
using Microsoft.AspNetCore.Authorization;

namespace OutliersAPP.API.Controllers
{
    // [AllowAnonymous]
    [Route("api/users/[controller]")]
    [ApiController]
    public class CareerpathController : ControllerBase
    {
        private readonly IOutliersRepository _repo;
        private readonly IMapper _mapper;
        public CareerpathController(IOutliersRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> getcareerpath()
        {
            var careerpaths = await _repo.GetCareerpaths();
            var careerpathToReturn = _mapper.Map<IEnumerable<CareerpathForListDto>>(careerpaths);
            return Ok(careerpathToReturn);
        }
        [HttpGet("{id}", Name = "GetCareerpath")]
        public async Task<IActionResult> getCareerpath(int id)
        {
            var careerpath = await _repo.GetCareerpath(id);
            var careerpathToReturn = _mapper.Map<CareerpathForDetailsDto>(careerpath);
            return Ok(careerpathToReturn);
        }
        [HttpGet("path/{id}", Name = "Getpath")]
        public async Task<IActionResult> getpath(int id)
        {
            var careerpath = await _repo.Getpath(id);
            var careerpathToReturn = _mapper.Map<PathForDetailsDto>(careerpath);
            return Ok(careerpathToReturn);
        }
        [HttpPost("PathDetails/{careerpathid}")]
        public async Task<IActionResult> Createcareerpath(int careerpathid, PathForCreationDto pathForCreationDto)
        {

            pathForCreationDto.pathid = careerpathid;
            var careerpath = _mapper.Map<CareerDetails>(pathForCreationDto);
            _repo.Add(careerpath);
            if (await _repo.SaveAll())
            {
                var careerpathToReturn = _mapper.Map<PathForReturnDto>(careerpath);
                return CreatedAtRoute("Getpath", new { id = careerpath.Id }, careerpathToReturn);
            }
            throw new Exception("Field To Create careerpath");
        }
        [HttpPost]
        public async Task<IActionResult> Createcareerpath(CareerpathForCreationDto careerpathForCreationDto)
        {
            var careerpath = _mapper.Map<Careerpath>(careerpathForCreationDto);
            _repo.Add(careerpath);
            if (await _repo.SaveAll())
            {
                var careerpathToReturn = _mapper.Map<CareerpathForReturnDto>(careerpath);
                return CreatedAtRoute("GetCareerpath", new { id = careerpath.Id }, careerpathToReturn);
            }
            throw new Exception("Field To Create careerpath");
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCareerpath(int id)
        {
            var Careerpath = await _repo.GetCareerpath(id);
            _repo.Delete(Careerpath);
            if (await _repo.SaveAll())
                return Ok();
            return BadRequest("Field to Delete Career Path");
        }
        [HttpDelete("PathDetails/{careerpathid}/{id}")]
        public async Task<IActionResult> DeleteCareerpathDetails(int id)
        {
            var Careerpath = await _repo.Getpath(id);
            _repo.Delete(Careerpath);
            if (await _repo.SaveAll())
                return Ok();
            return BadRequest("Field to Delete Career Path");
        }
        // [httpput]
        // public async Task<IActionResult> kfjgka(int id){          
        // }
    }

}