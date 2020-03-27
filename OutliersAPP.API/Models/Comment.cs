using System;
namespace OutliersAPP.API.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string description { get; set; }
        public DateTime CommentTime { get; set; }
        public Post Post { get; set; }
        public int  PostId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}