using System;

namespace OutliersAPP.API.Dtos
{
    public class PlaylistForCreationDto
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string category { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public int UserId { get; set; }

           public PlaylistForCreationDto()
        {
            DateAdded= DateTime.Now;
        }
    }
}