using ITBL.DataModels;
using ITBL.DTOs;
using ITBL.PwModel;
using ITBL.Services;
using Microsoft.AspNetCore.Mvc;

namespace ITBL.Controllers
{


    [Route("api/pwmodel")]
    [ApiController]
    public class PwModelController : ControllerBase
    {

        private readonly IPwModelService _pwModelService;

        public PwModelController(IPwModelService pwModelService)
        {
            this._pwModelService = pwModelService;
        }


        [HttpGet]
        [Route("{password}")]
        public async Task<PasswordFeatures> Get([FromRoute] string password)
        {
            PasswordFeatures ret = _pwModelService.ExecutePrediction(password);
            return ret;
        }



    }



}
