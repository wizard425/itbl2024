using ITBL.AppDb;
using ITBL.DataModels;

namespace ITBL.Services
{
    public class SchoolClassService : ISchoolClassService
    {

        private readonly AppDbContext _context;

        public SchoolClassService(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }

        public async Task<SchoolClass> Add(SchoolClass entity)
        {
            _context.SchoolClasses.Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public Task<SchoolClass> Delete(SchoolClass entity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<SchoolClass>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<SchoolClass> GetById(int id)
        {
            SchoolClass sc = await _context.SchoolClasses.FindAsync(id);

            return sc ?? throw new KeyNotFoundException();
        }

        public Task<SchoolClass> Update(SchoolClass entity)
        {
            throw new NotImplementedException();
        }

    }
}
