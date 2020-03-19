using System;

namespace OutliersAPP.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string IntrestedJobe { get; set; }
        public string Experience { get; set; }
        public string Skills { get; set; }
        public string userType { get; set; }
        public string PhotoURL { get; set; }
        
    }
}