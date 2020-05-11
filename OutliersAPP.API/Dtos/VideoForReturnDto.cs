using System;

namespace OutliersAPP.API.Dtos
{
    public class VideoForReturnDto
    {
         public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }     
         public int PlaylistId { get; set; }

        

    }
}