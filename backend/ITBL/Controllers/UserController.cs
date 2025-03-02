﻿using ITBL.AppDb;
using ITBL.DataModels;
using ITBL.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data;

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

        [HttpGet]
        [Route("addtoclass/{userId}/{schoolClassName}")]
        public async Task<User> AddToClass([FromRoute]int userId, [FromRoute] string schoolClassName)
        {
            User ret = await _userService.AddToClass(userId, schoolClassName);

            return ret;
        }

        [HttpGet]
        [Route("addpoints/{userId}/{points}")]
        public async Task<User> AddPoints([FromRoute] int userId, [FromRoute] int points)
        {
            User ret = await _userService.AddPoints(userId, points);

            return ret;
        }

    }
}
