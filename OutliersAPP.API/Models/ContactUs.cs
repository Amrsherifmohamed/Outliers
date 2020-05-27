namespace OutliersAPP.API.Models
{
    public class ContactUs
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public User Sender { get; set; }
        public string Email { get; set; }
        public string Content { get; set; }
        public string Subject { get; set; }
        public System.DateTime DateAdded { get; set; }
        public bool IsRead { get; set; }

    }
}