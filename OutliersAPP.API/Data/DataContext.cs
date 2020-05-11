using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>
    , UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Value> Values { get; set; }

        public DbSet<Photo> Photos { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Job> Job { get; set; }
        public DbSet<ApplyForJob> ApplyForJob { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<playlist> Playlists { get; set; }
        public DbSet<video> Videos { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);
            builder.Entity<ApplyForJob>(
                userRole =>
                {
                    userRole.HasKey(ur => new { ur.UserId, ur.JobId });
                    userRole.HasOne(ur => ur.Job)
                    .WithMany(r => r.ApplyForJobs)
                    .HasForeignKey(ur => ur.JobId)
                    .IsRequired();
                    userRole.HasOne(ur => ur.User)
                   .WithMany(r => r.ApplyForJobs)
                   .HasForeignKey(ur => ur.UserId)
                   .IsRequired();

                }
            );


            base.OnModelCreating(builder);
            builder.Entity<UserRole>(
                userRole =>
                {
                    userRole.HasKey(ur => new { ur.UserId, ur.RoleId });
                    userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                    userRole.HasOne(ur => ur.User)
                   .WithMany(r => r.UserRoles)
                   .HasForeignKey(ur => ur.UserId)
                   .IsRequired();

                }
            );
            //  builder.Entity<User>()
            // .HasMany<video>(u => u.videos)
            // .WithOne(l => l.User)
            // .HasForeignKey(l => l.UserId)
            // .OnDelete(DeleteBehavior.Cascade);

            //  builder.Entity<User>()
            // .HasMany<playlist>(u => u.playlists)
            // .WithOne(l => l.User)
            // .HasForeignKey(l => l.UserId)
            // .OnDelete(DeleteBehavior.Cascade);


            builder.Entity<playlist>()
            .HasMany<video>(u => u.Videos)
            .WithOne(l => l.Playlist)
            .HasForeignKey(l => l.PlaylistId)
            .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Like>()
            .HasKey(k => new { k.LikerId, k.LikeeId });
            builder.Entity<Like>()
            .HasOne(l => l.Likee)
            .WithMany(u => u.Likers)
            .HasForeignKey(l => l.LikeeId)
            .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Like>()
            .HasKey(k => new { k.LikerId, k.LikeeId });
            builder.Entity<Like>()
            .HasOne(l => l.Liker)
            .WithMany(u => u.Likees)
            .HasForeignKey(l => l.LikerId)
            .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Message>()
            .HasOne(m => m.Sender)
            .WithMany(u => u.MessagesSent)
            .OnDelete(DeleteBehavior.Restrict);
            builder.Entity<Message>()
           .HasOne(m => m.Recipient)
           .WithMany(u => u.MessagesReceived)
           .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Photo>()
            .HasQueryFilter(p => p.IsApproved);
        }

    }
}