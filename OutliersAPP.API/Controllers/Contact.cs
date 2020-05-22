using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OutliersAPP.API.Dtos;
using OutliersAPP.API.Models;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using OutliersAPP.API.Data;
using System.Net.Mail;
namespace OutliersAPP.API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController:ControllerBase
    {
         private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        private readonly DataContext _context;
        private readonly IOutliersRepository _repo;
        public ContactController(IOutliersRepository repo, IMapper mapper, DataContext context, UserManager<User> userManager)
        {
            _userManager = userManager;
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }



        [HttpGet("{id}", Name = "GetUserContact")]
        public async Task<IActionResult> GetUserContact(int id)
        {
            var Contact = await _repo.GetContact(id);
            
            var ContactToReturn = _mapper.Map<ContactForDetailsDto>(Contact);  
            return Ok(ContactToReturn);
        }


        [HttpGet]
        public async Task<IActionResult> GetContactsUnRead()
        {
         
            var Contacts = await _repo.GetContacts();
            var ContactsToReturn = _mapper.Map<IEnumerable<ContactForListDto>>(Contacts);
            return Ok(ContactsToReturn);
        }
        [HttpGet("allcontacts")]
        public async Task<IActionResult> GetAllContacts()
        {
         
            var Contacts = await _repo.GetAllContacts();
            var ContactsToReturn = _mapper.Map<IEnumerable<ContactForListDto>>(Contacts);
            return Ok(ContactsToReturn);
        }


     [HttpPost("createcontact/{id}")]
        public async Task<IActionResult> CreateContact(int id, [FromBody] ContactForCreationDto createForCreationDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            createForCreationDto.SenderId = id;
            var Contact = _mapper.Map<ContactUs>(createForCreationDto);
            _repo.Add(Contact);

            if (await _repo.SaveAll())
            {
                var ContactToReturn = _mapper.Map<ContactToReturnDto>(Contact);
                return CreatedAtRoute("GetUserContact", new { id = Contact.Id }, ContactToReturn);
            }
            throw new Exception("Field To Create Contact");
        }

         [HttpDelete("deletecontact/{id}")]
        public async Task<IActionResult> DeleteContact([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var findContact = await _context.Contacts.FindAsync(id);

            if (findContact == null)
            {
                return NotFound();
            }
            _context.Contacts.Remove(findContact);
            await _context.SaveChangesAsync();
            return Ok(new JsonResult("The Product with id " + id + " is Deleted."));
        }


        [HttpPut("read/{id}")]
        public async Task<IActionResult> AdminReadContact(int id){
        

             var message = await _repo.GetContact(id);
       
            message.IsRead = true;
            await _repo.SaveAll();
            return NoContent();
       }

    }
}