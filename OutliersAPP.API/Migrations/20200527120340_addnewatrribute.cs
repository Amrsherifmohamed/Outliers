using Microsoft.EntityFrameworkCore.Migrations;

namespace OutliersAPP.API.Migrations
{
    public partial class addnewatrribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "name",
                table: "Videos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "name",
                table: "Videos");
        }
    }
}
