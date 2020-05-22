using System;
using System.Collections.Generic;

namespace OutliersAPP.API.Dtos
{
    public class CareerpathForListDto
    {
        public int Id { get; set; }
        public string Pahtname { get; set; }
        public string Category { get; set; }
        public string description { get; set; }
        public ICollection<PathForDetailsDto> Paths { get; set; }
    }
}