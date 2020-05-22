using System;
namespace OutliersAPP.API.Dtos
{
    public class PostToReturnDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string  description { get; set; }
        public DateTime? posttime { get; set; }
    }
}