using System;
using Microsoft.AspNetCore.Http;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Dtos
{
    public class JobForCreationDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string JobTitle { get; set; }
        public string ExperienceNeeded { get; set; }
        public string Salary { get; set; }
        public string JobRole { get; set; }
        public string JobType { get; set; }
        public string JobRequirements { get; set; }
        public string CareerLevel { get; set; }
        public string Vacancies { get; set; }
        public string JobDescription { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime Created { get; set; }

        public JobForCreationDto()
        {
            Created= DateTime.Now;
        }
    }
}