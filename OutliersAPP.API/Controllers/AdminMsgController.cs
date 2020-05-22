using OutliersAPP.API.Dtos;
using OutliersAPP.API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using AutoMapper;
using System.Collections.Generic;
using OutliersAPP.API.Data;
namespace OutliersAPP.API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminMsgController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        private readonly DataContext _context;
        private readonly IOutliersRepository _repo;
        public AdminMsgController(IOutliersRepository repo, IMapper mapper, DataContext context, UserManager<User> userManager)
        {
            _userManager = userManager;
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }

       
        [HttpGet("{id}", Name = "GetContact")]
        public async Task<IActionResult> GetContact(int id)
        {
            var Contact = await _repo.GetAdminContact(id);

            var ContactToReturn = _mapper.Map<ContactForDetailsDto>(Contact);
            return Ok(ContactToReturn);
        }


        [HttpGet]
        public async Task<IActionResult> GetContactsUnRead()
        {

            var Contacts = await _repo.GetAdminContacts();
            var ContactsToReturn = _mapper.Map<IEnumerable<ContactForListDto>>(Contacts);
            return Ok(ContactsToReturn);
        }

        [HttpGet("allcontacts")]
        public async Task<IActionResult> GetAllContacts()
        {

            var Contacts = await _repo.GetAdminContacts();
            var ContactsToReturn = _mapper.Map<IEnumerable<ContactForListDto>>(Contacts);
            return Ok(ContactsToReturn);
        }


        [HttpPost("sendmsg/{id}")]
        public async Task<IActionResult> CreateContact(int id, [FromBody] AdminContactForCreationDto createForCreationDto)
        {
            createForCreationDto.RecipientId = id;
            var Contact = _mapper.Map<AdminContact>(createForCreationDto);
            _repo.Add(Contact);

            if (await _repo.SaveAll())
            {
                var ContactToReturn = _mapper.Map<AdminContactToReturnDto>(Contact);
                return CreatedAtRoute("GetContact", new { id = Contact.Id }, ContactToReturn);
            }
            throw new Exception("Field To Create Contact");
        }

        [HttpPut("read/{id}")]
        public async Task<IActionResult> UserReadContact(int id)
        {
            var message = await _repo.GetAdminContact(id);
            message.IsRead = true;
            await _repo.SaveAll();
            return NoContent();
        }

         [HttpDelete("deletecontact/{id}")]
        public async Task<IActionResult> DeleteContact([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var findContact = await _context.AdminContacts.FindAsync(id);

            if (findContact == null)
            {
                return NotFound();
            }
            _context.AdminContacts.Remove(findContact);
            await _context.SaveChangesAsync();
            return Ok(new JsonResult("The Product with id " + id + " is Deleted."));
        }

    }
}