using System;
namespace OutliersAPP.API.Dtos
{
    public class ContactToReturnDto
    {
        public string Email { get; set; }
        public string Content { get; set; }
        public string Subject { get; set; }

        public System.DateTime DateAdded { get; set; }
    }
}