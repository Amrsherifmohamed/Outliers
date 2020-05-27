using System;
using Microsoft.AspNetCore.Http;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Dtos
{
    public class AdminContactForCreationDto
    {
        public int Id { get; set; }
        public int RecipientId { get; set; }
        public string Content { get; set; }
        public string Subject { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsRead { get; set; }

        public AdminContactForCreationDto()
        {
            DateAdded = DateTime.Now;
        }
    }
}