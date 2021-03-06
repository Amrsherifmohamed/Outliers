using System;
using System.ComponentModel.DataAnnotations;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]

        public string UserName { get; set; }
        [StringLength(8, MinimumLength = 4, ErrorMessage = "يجب أن لا تقل كلمة السر عن أربعة أحرف ولا تزيد عن ثمانية")]
        [Required]
        public string Password { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string KnownAs { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        public string RoleName { get; set; }
        public string phoneNumber { get; set; }
        public string IntrestedJobe { get; set; }
        public string Experience { get; set; }
        public string Skills { get; set; }
        public string careerpath {get;set;}
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}