using System;
namespace OutliersAPP.API.Dtos
{
    public class AdminContactToReturnDto
    {
        public string Email { get; set; }
        public string Content { get; set; }
        public string Suject { get; set; }
        public System.DateTime DateAdded { get; set; }
    }
}