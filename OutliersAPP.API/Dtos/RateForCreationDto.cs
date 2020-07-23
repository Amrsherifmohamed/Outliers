using System;

namespace OutliersAPP.API.Dtos
{
    public class RateForCreationsDto
    {
        public int userId { get; set; }
        public int playlistId { get; set; }
        public float ratevalue { get; set; }
    }
}