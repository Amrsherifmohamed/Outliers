using System;
using System.Collections.Generic;
using OutliersAPP.API.Models;
namespace OutliersAPP.API.Dtos
{
    public class ContactForListDto
    {

        public int Id { get; set; }
        public int SenderId { get; set; }
        public string Suject { get; set; }
         public string Email { get; set; }
        public string SenderKnownAs { get; set; }
        public string SenderPhotoUrl { get; set; }
        public string Content { get; set; }
        public bool IsRead { get; set; }
        public DateTime DateAdded { get; set; }
    }
}