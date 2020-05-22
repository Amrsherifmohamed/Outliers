using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace OutliersAPP.API.Models
{
      public class Careerpath
      {
          public int Id { get; set; }
          public string Pahtname { get; set; }
          public string Category { get; set; }
          public string description { get; set; }
          public ICollection<CareerDetails> Paths { get; set; }
      }
    
}