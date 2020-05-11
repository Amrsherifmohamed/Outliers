using System.Collections.Generic;
using System.Threading.Tasks;
using OutliersAPP.API.Helpers;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Data
{
    public interface IOutliersRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<PagedList<User>> GetUsers(UserParams userParams);
        Task<User> GetUser(int id,bool isCurrentUser);
        Task<Photo> GetPhoto(int id);
         Task<video> GetVideo(int id);
        Task<Photo> GetMainPhotoForUser(int userId);
        Task<Like> GetLike(int userId, int recipientId);
        Task<Message> GetMessage(int id);
        Task<playlist> GetPlaylist(int id);
        Task<IEnumerable<Job>> GetJobs();
        Task<Job> GetJob(int id);
        Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams );
        Task<IEnumerable<Message>> GetConversation(int userId, int recipientId);
        Task<int> GetUnreadMessagesForUser(int userId);
        Task<Payment> GetPaymentForUser(int userId);
        Task<ICollection<User>> GetLikersOrLikees(int userId,string type);
        Task<ICollection<User>> GetAllUsersExceptAdmin();
        Task<int> getnumberofollwering(int userId);
        Task<int> getnumberofollwers(int userId);
        Task<Post> getpost(int id);
        Task<IEnumerable<Post>> GetPosts(int userId);
        Task<ICollection<Post>> GetPostsForFollwing(int userId);
        Task<Comment> getComment(int id,int postId);
        Task<IEnumerable<Comment>> GetComments(int postId);
        Task<ICollection<User>> getfollowing(int userId);
        Task<Post> getpostformuser(int postId,int userId);
        Task<Comment> getcommentForuser(int postId,int id,int userId);
        Task<int>   Getnumberofcomment(int postId);
    }
}