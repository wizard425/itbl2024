using ITBL.DataModels;
using Microsoft.EntityFrameworkCore;

namespace ITBL.AppDb
{
    public interface IAppDbContext
    {
        public DbSet<User> Users { get; set; }
    }
}
