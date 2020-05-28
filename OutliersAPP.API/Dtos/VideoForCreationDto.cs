using System;
using Microsoft.AspNetCore.Http;

namespace OutliersAPP.API.Dtos
{
    public class VideoForCreationDto
    {
        public int Id { get; set; }
        public string name {get;set;}
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public string publicId { get; set; }
        public int UserId { get; set; }

        public int PlaylistId { get; set; }
        public VideoForCreationDto()
        {
            DateAdded = DateTime.Now;
        }

    }
}