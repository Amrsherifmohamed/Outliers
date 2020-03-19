using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace OutliersAPP.API.Models
{
    public class Job 
    {
        public int Id { get; set; } 
        public string JobTitle { get; set; }   
        public string ExperienceNeeded { get; set; } 
        public string Salary { get; set; } 
        public string JobType { get; set; }   
        public string JobRequirements { get; set; }
        public DateTime Created { get; set; }
        public  ICollection <ApplyForJob> ApplyForJobs { get; set; }
    
    }
}