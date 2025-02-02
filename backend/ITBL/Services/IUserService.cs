using ITBL.DataModels;

namespace ITBL.Services
{
    public interface IUserService : IBaseService<User>
    {
        public Task<User> AddToClass(int userId, string schoolClassName);
        public Task<User> AddPoints(int userId, int points);
    }
}
