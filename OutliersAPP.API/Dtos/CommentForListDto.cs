using System;
namespace OutliersAPP.API.Dtos
{
    public class CommentForListDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserKnownAs { get; set; }
        public string UserName { get; set; }
        public string UserPhotoUrl { get; set; }
        public int PostId { get; set; } 
        public string description { get; set; }
        public DateTime CommentTime { get; set; }
       
    }
}