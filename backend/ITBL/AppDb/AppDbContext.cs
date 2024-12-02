using ITBL.DataModels;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace ITBL.AppDb
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<SchoolClass> SchoolClasses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SchoolClass>()
                .HasMany(e => e.Users)
                .WithOne(e => e.SchoolClass)
                .HasForeignKey(e => e.SchoolClassId)
                .IsRequired(false);
        }


    }
}
