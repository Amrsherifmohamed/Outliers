﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OutliersAPP.API.Data;

namespace OutliersAPP.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200718221919_newattribute")]
    partial class newattribute
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024");

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.AdminContact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<DateTime>("DateAdded");

                    b.Property<bool>("IsRead");

                    b.Property<int>("RecipientId");

                    b.Property<string>("Subject");

                    b.HasKey("Id");

                    b.HasIndex("RecipientId");

                    b.ToTable("AdminContacts");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.ApplyForJob", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("JobId");

                    b.Property<DateTime>("ApplyDate");

                    b.Property<string>("JobTitle");

                    b.Property<string>("Msg");

                    b.Property<string>("UserName");

                    b.HasKey("UserId", "JobId");

                    b.HasIndex("JobId");

                    b.ToTable("ApplyForJob");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.CareerDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("PathId");

                    b.Property<string>("name");

                    b.HasKey("Id");

                    b.HasIndex("PathId");

                    b.ToTable("CareerDetailss");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Careerpath", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Category");

                    b.Property<string>("Pahtname");

                    b.Property<string>("description");

                    b.HasKey("Id");

                    b.ToTable("Careerpaths");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CommentTime");

                    b.Property<int>("PostId");

                    b.Property<int>("UserId");

                    b.Property<string>("description");

                    b.HasKey("Id");

                    b.HasIndex("PostId");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.ContactUs", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("Email");

                    b.Property<bool>("IsRead");

                    b.Property<int>("SenderId");

                    b.Property<string>("Subject");

                    b.HasKey("Id");

                    b.HasIndex("SenderId");

                    b.ToTable("Contacts");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Job", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CareerLevel");

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<DateTime>("Created");

                    b.Property<string>("ExperienceNeeded");

                    b.Property<string>("JobDescription");

                    b.Property<string>("JobRequirements");

                    b.Property<string>("JobRole");

                    b.Property<string>("JobTitle");

                    b.Property<string>("JobType");

                    b.Property<string>("Salary");

                    b.Property<int>("UserId");

                    b.Property<string>("Vacancies");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Job");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Like", b =>
                {
                    b.Property<int>("LikerId");

                    b.Property<int>("LikeeId");

                    b.HasKey("LikerId", "LikeeId");

                    b.HasIndex("LikeeId");

                    b.ToTable("Likes");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<DateTime?>("DateRead");

                    b.Property<bool>("IsRead");

                    b.Property<DateTime>("MessageSent");

                    b.Property<bool>("RecipientDeleted");

                    b.Property<int>("RecipientId");

                    b.Property<bool>("SenderDeleted");

                    b.Property<int>("SenderId");

                    b.HasKey("Id");

                    b.HasIndex("RecipientId");

                    b.HasIndex("SenderId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Amount");

                    b.Property<string>("Currency");

                    b.Property<string>("Description");

                    b.Property<bool>("IsPaid");

                    b.Property<DateTime>("PaymentDate");

                    b.Property<string>("ReceiptUrl");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("Description");

                    b.Property<bool>("IsApproved");

                    b.Property<bool>("IsMain");

                    b.Property<string>("PublicId");

                    b.Property<string>("Url");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.playlist", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Category");

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Playlists");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("PostLike");

                    b.Property<int>("UserId");

                    b.Property<string>("description");

                    b.Property<DateTime?>("posttime");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("City");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Country");

                    b.Property<DateTime>("Created");

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("Experience");

                    b.Property<string>("Gender");

                    b.Property<string>("Interests");

                    b.Property<string>("IntrestedJobe");

                    b.Property<string>("Introduction");

                    b.Property<string>("KnownAs");

                    b.Property<DateTime>("LastActive");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("LookingFor");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("RoleName");

                    b.Property<string>("SecurityStamp");

                    b.Property<string>("Skills");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.Property<string>("careerpath");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.UserRole", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Value", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("OutliersAPP.API.Models.video", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateAdded");

                    b.Property<string>("Description");

                    b.Property<int>("PlaylistId");

                    b.Property<string>("PublicId");

                    b.Property<string>("Url");

                    b.Property<int>("UserId");

                    b.Property<string>("name");

                    b.HasKey("Id");

                    b.HasIndex("PlaylistId");

                    b.HasIndex("UserId");

                    b.ToTable("Videos");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.AdminContact", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User", "Recipient")
                        .WithMany()
                        .HasForeignKey("RecipientId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.ApplyForJob", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.Job", "Job")
                        .WithMany("ApplyForJobs")
                        .HasForeignKey("JobId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OutliersAPP.API.Models.User", "User")
                        .WithMany("ApplyForJobs")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.CareerDetails", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.Careerpath", "Path")
                        .WithMany("Paths")
                        .HasForeignKey("PathId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Comment", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.Post", "Post")
                        .WithMany("Comments")
                        .HasForeignKey("PostId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OutliersAPP.API.Models.User", "User")
                        .WithMany("Comments")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.ContactUs", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User", "Sender")
                        .WithMany()
                        .HasForeignKey("SenderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Job", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User", "User")
                        .WithMany("Jobs")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Like", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User", "Likee")
                        .WithMany("Likers")
                        .HasForeignKey("LikeeId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("OutliersAPP.API.Models.User", "Liker")
                        .WithMany("Likees")
                        .HasForeignKey("LikerId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Message", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User", "Recipient")
                        .WithMany("MessagesReceived")
                        .HasForeignKey("RecipientId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("OutliersAPP.API.Models.User", "Sender")
                        .WithMany("MessagesSent")
                        .HasForeignKey("SenderId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Photo", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User", "User")
                        .WithMany("Photos")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.playlist", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User", "User")
                        .WithMany("playlists")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.Post", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.User", "User")
                        .WithMany("Posts")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.UserRole", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.Role", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OutliersAPP.API.Models.User", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OutliersAPP.API.Models.video", b =>
                {
                    b.HasOne("OutliersAPP.API.Models.playlist", "Playlist")
                        .WithMany("Videos")
                        .HasForeignKey("PlaylistId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OutliersAPP.API.Models.User", "User")
                        .WithMany("videos")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
