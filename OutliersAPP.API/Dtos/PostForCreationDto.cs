using System;
using Microsoft.AspNetCore.Http;

namespace OutliersAPP.API.Dtos
{
    public class PostForCreationDto
    {
        public int UserId { get; set; }
        public string  description { get; set; }
        public DateTime? posttime { get; set; }
        public PostForCreationDto()
        {
            posttime= DateTime.Now;
        }
    }
}