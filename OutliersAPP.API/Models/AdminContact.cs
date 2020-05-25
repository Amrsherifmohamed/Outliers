namespace OutliersAPP.API.Models
{
    public class AdminContact
    {
        public int Id { get; set; }
        public int RecipientId { get; set; }
        public User Recipient { get; set; }
        public string Content { get; set; }
        public string Subject { get; set; }
        public System.DateTime DateAdded { get; set; }
        public bool IsRead { get; set; }
    }
}