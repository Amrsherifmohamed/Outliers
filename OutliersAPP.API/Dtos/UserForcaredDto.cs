using System;


namespace OutliersAPP.API.Dtos
{
    public class UserForcaredDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
       
        public string Gender { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }

        public DateTime LastActive { get; set; }

        public string userType { get; set; }
        public string PhotoURL { get; set; }
        public string careerpath {get;set;}
    }
}