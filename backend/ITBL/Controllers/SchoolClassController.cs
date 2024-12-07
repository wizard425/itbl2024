using ITBL.DataModels;
using ITBL.DTOs;
using ITBL.Services;
using Microsoft.AspNetCore.Mvc;

namespace ITBL.Controllers
{


    [Route("api/class")]
    [ApiController]
    public class SchoolClassController : ControllerBase
    {

        private readonly ISchoolClassService _schoolClassService;

        public SchoolClassController(ISchoolClassService schoolClassService)
        {
            this._schoolClassService = schoolClassService;
        }


        [HttpPost]
        public async Task<SchoolClass> Add([FromBody] SchoolClass entity)
        {
            SchoolClass ret = await _schoolClassService.Add(entity);
            return ret;
        }


        [HttpGet]
        [Route("{id}")]
        public async Task<SchoolClass> Get([FromRoute] int id)
        {
            SchoolClass ret = await _schoolClassService.GetById(id);
            return ret;
        }

        [HttpGet]
        [Route("ranklist/{id}")]
        public async Task<List<RanklistEntry>> GetRanklist([FromRoute] int id)
        {
            List<RanklistEntry> ret = await _schoolClassService.GetRanklist(id);
            return ret;
        }


    }



}
