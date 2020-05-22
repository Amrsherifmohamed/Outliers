using System;
using System.Collections.Generic;
using OutliersAPP.API.Models;
namespace OutliersAPP.API.Dtos
{
    public class AdminContactForDetailsDto
    {
           public int Id { get; set; }
        public int RecipientId { get; set; }
        public string Content { get; set; }
        public string Suject { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsRead { get; set; }
    }
}