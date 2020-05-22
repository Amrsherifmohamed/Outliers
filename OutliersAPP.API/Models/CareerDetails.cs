using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace OutliersAPP.API.Models
{
  public class CareerDetails
  {
      public int Id { get; set; }
      public string name { get; set; }
      // public string description { get; set; }
      public Careerpath Path { get; set; }
      public int PathId { get; set; }
      // public ICollection<playlist> playlists { get; set; }
  }
}