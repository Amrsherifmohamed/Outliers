using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace OutliersAPP.API.Models
{
    public class User : IdentityUser<int>
    {
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        private string phoneNumber { get; set; }
        public string RoleName { get; set; }
        public string IntrestedJobe { get; set; }
        public string Experience { get; set; }
        public string Skills { get; set; }
        public string careerpath {get;set;}
        public ICollection<Photo> Photos { get; set; }
        public ICollection<playlist> playlists { get; set; }
        public ICollection<video> videos { get; set; }

        public ICollection<Like> Likers { get; set; }
        public ICollection<Like> Likees { get; set; }
        public ICollection<Message> MessagesSent { get; set; }
        public ICollection<Message> MessagesReceived { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<ApplyForJob> ApplyForJobs { get; set; }
        public  ICollection <Job> Jobs { get; set; }
        public ICollection<Post> Posts { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Rate> Rates { get; set; }

    }
}