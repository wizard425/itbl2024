using ITBL.DataModels;
using ITBL.DTOs;

namespace ITBL.Services
{
    public interface ISchoolClassService : IBaseService<SchoolClass>
    {


        public Task<List<RanklistEntry>> GetRanklist(int schoolClassId);
    }
}
