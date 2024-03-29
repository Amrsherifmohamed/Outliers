using System;
using System.Collections.Generic;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Dtos
{
    public class UserForDetailsDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
         public string RoleName { get; set; }

        public string Gender { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PhotoURL { get; set; }
        public string userType { get; set; }
        public string careerpath {get;set;}
        public ICollection<PhotoForDetailsDto> Photos { get; set; }
    }
}