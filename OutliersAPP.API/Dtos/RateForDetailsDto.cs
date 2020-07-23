using System;

namespace OutliersAPP.API.Dtos
{
    public class RateForDetailsDto
    {
        public int Id { get; set; }
        public int userId { get; set; }
        public float ratevalue { get; set; }
        public int playlistId { get; set; }

        
    }
}