using Microsoft.EntityFrameworkCore.Migrations;

namespace OutliersAPP.API.Migrations
{
    public partial class careerpath : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Careerpaths",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Pahtname = table.Column<string>(nullable: true),
                    Category = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Careerpaths", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CareerDetailss",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(nullable: true),
                    PathId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CareerDetailss", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CareerDetailss_Careerpaths_PathId",
                        column: x => x.PathId,
                        principalTable: "Careerpaths",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CareerDetailss_PathId",
                table: "CareerDetailss",
                column: "PathId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CareerDetailss");

            migrationBuilder.DropTable(
                name: "Careerpaths");
        }
    }
}
