using ITBL.AppDb;
using ITBL.DataModels;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL.Infrastructure.Internal;
using System.Data;

namespace ITBL.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }

        public async Task<User> Add(User entity)
        {
            // check for duplicate
            if (await _context.Users.Where(x => x.Name.Equals(entity.Name)).FirstOrDefaultAsync() == null)
            {
                await _context.Users.AddAsync(entity);
                await _context.SaveChangesAsync();
                return entity;
            }
            throw new DuplicateNameException();
        }

        public Task<User> Delete(User entity)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<IEnumerable<User>> GetAllFromClass(int schoolClassId)
        {
            return await _context.Users.Where(x => x.SchoolClass != null && x.SchoolClass.Id == schoolClassId).ToListAsync();
        }

        public async Task<User> GetById(int id)
        {
            User? req = await _context.Users.FindAsync(id);

            return req ?? throw new KeyNotFoundException();
        }

        public Task<User> Update(User entity)
        {
            throw new NotImplementedException();
        }

        public async Task<User> AddToClass(int userId, string schoolClassName)
        {
            User? u = await _context.Users.FindAsync(userId);
            if (u != null)
            {
                SchoolClass? sc = await _context.SchoolClasses.Where(x => x.Name.Equals(schoolClassName)).FirstOrDefaultAsync();
                if(sc != null)
                {
                    sc.Users.Add(u);
                    await _context.SaveChangesAsync();
                    return u;
                }
            }
            else
            {
                throw new Exception();
            }
            return u;
        }
    }
}
