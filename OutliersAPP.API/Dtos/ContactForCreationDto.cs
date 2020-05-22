using System;
using Microsoft.AspNetCore.Http;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Dtos
{
    public class ContactForCreationDto
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public User Sender { get; set; }
        public string Email { get; set; }
        public string Content { get; set; }
        public string Suject { get; set; }
        public DateTime DateAdded { get; set; }

        public ContactForCreationDto()
        {
            DateAdded = DateTime.Now;
        }
    }
}