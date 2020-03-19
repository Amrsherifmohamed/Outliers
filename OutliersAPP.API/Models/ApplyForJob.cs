using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace OutliersAPP.API.Models
{
    public class ApplyForJob 
    {
        public int JobId { get; set; }
        public int UserId { get; set; }
        public Job Job { get; set; }
        public User User { get; set; }
    
    }
}