using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OutliersAPP.API.Migrations
{
    public partial class Outlierscompany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Job",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    JobTitle = table.Column<string>(nullable: true),
                    ExperienceNeeded = table.Column<string>(nullable: true),
                    Salary = table.Column<string>(nullable: true),
                    JobType = table.Column<string>(nullable: true),
                    JobRequirements = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Job", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ApplyForJob",
                columns: table => new
                {
                    JobId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplyForJob", x => new { x.UserId, x.JobId });
                    table.ForeignKey(
                        name: "FK_ApplyForJob_Job_JobId",
                        column: x => x.JobId,
                        principalTable: "Job",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ApplyForJob_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ApplyForJob_JobId",
                table: "ApplyForJob",
                column: "JobId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApplyForJob");

            migrationBuilder.DropTable(
                name: "Job");
        }
    }
}
