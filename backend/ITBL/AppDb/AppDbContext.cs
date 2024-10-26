using ITBL.DataModels;
using Microsoft.EntityFrameworkCore;

namespace ITBL.AppDb
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
