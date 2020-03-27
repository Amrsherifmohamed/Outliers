using System;
using System.Collections.Generic;
using OutliersAPP.API.Models;
namespace OutliersAPP.API.Dtos
{
    public class PostForListDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserKnownAs { get; set; }
        public string UserPhotoUrl { get; set; }
        public string  description { get; set; }
        public DateTime? posttime { get; set; }
    }
}