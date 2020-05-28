
using System;
using System.Collections.Generic;
using OutliersAPP.API.Models;
namespace OutliersAPP.API.Dtos
{
    public class VideoForDetailsDto
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string category { get; set; }
        public string Description { get; set; }
        public string url { get; set; }
        public DateTime DateAdded { get; set; }
        public string ProfName { get; set; }
        public string ProfCity { get; set; }
        public string ProfCountry { get; set; }
        public string ProfInfo { get; set; }
        public string ProfPhone { get; set; }
        public string UserPhotoUrl { get; set; }

        public int UserId { get; set; }

    }
}