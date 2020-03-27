using System;

using System;
namespace OutliersAPP.API.Dtos
{
    public class CommentForCreationDto
    {
        public int UserId { get; set; }
        public int PostId { get; set; }
        public string description { get; set; }
        public DateTime CommentTime { get; set; }
        public CommentForCreationDto()
        {
            CommentTime=DateTime.Now;;
        }
        
    }
}