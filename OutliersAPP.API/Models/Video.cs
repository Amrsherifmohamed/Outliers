using System;

namespace OutliersAPP.API.Models
{
    public class video
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public playlist Playlist { get; set; }
        public int PlaylistId { get; set; }
    }
}