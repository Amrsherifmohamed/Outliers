using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace OutliersAPP.API.Models
{
    public class Rate
    {
        public int id { get; set; }
        public float ratevalue { get; set; }
        public playlist playlist { get; set; }
        public int playlistId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        
    }

}