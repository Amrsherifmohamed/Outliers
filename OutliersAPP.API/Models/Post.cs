using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
namespace OutliersAPP.API.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string  description { get; set; }
        public DateTime? posttime { get; set; }
        public int PostLike { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}