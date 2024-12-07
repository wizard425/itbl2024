using ITBL.AppDb;
using ITBL.DataModels;
using ITBL.DTOs;
using Microsoft.EntityFrameworkCore;

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


        public async Task<List<RanklistEntry>> GetRanklist(int schoolClassId)
        {

            List<RanklistEntry> ranklist = await (from sch in _context.SchoolClasses
                                            where (sch.Id == schoolClassId)
                                            join us in _context.Users on sch.Id equals us.SchoolClassId
                                            select new RanklistEntry()
                                            {
                                                Position = 0,
                                                User = us
                                            }).ToListAsync();
;
            ranklist.Sort((a, b) => b.User.Points.CompareTo(a.User.Points));

            for(int i = 0; i < ranklist.Count; i++)
            {
                ranklist.ElementAt(i).Position = i + 1;
            }

            return ranklist;

        }
    }
}
