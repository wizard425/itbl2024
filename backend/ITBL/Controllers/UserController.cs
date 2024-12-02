using ITBL.AppDb;
using ITBL.DataModels;
using ITBL.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Net;

namespace ITBL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            this._userService = userService;
        }


        [HttpPost]
        public async Task<User> Add([FromBody] User entity)
        {
            try
            {
                User ret = await _userService.Add(entity);
                return ret;
            }
            catch (DuplicateNameException dp)
            {
                throw dp;
            }
        }

        [HttpPost]
        [Route("/addtoclass/{userId}/{schoolClassName}")]
        public async Task<User> AddToClass([FromRoute]int userId, [FromRoute] string schoolClassName)
        {
            User ret = await _userService.AddToClass(userId, schoolClassName);

            return ret;
        }

    }
}
