using ITBL.AppDb;
using ITBL.DataModels;
using ITBL.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            User ret = await _userService.Add(entity);
            return ret;
        }

    }
}
