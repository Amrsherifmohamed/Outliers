using System;
using System.Collections.Generic;
using CloudinaryDotNet.Actions;

namespace OutliersAPP.API.Models
{
    public class playlist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public ICollection<video> Videos{ get; set; }
    }
}