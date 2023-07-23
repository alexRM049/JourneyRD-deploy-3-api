using API.Dtos;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> userManager;
        private readonly TokenService tokenService;

        public AccountController(UserManager<AppUser> userManager, TokenService tokenService)
        {
            this.userManager = userManager;
            this.tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto login) 
        {
            var user = await userManager.FindByEmailAsync(login.Email);
            if (user == null) { return Unauthorized(); }

            var result = await userManager.CheckPasswordAsync(user, login.Password);

            if (result)
            {
                return new UserDto
                {
                    DisplayName = user.firstName,
                    Token = tokenService.CreateToken(user),
                    Username = user.UserName
                };
            }

            return Unauthorized();
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto) 
        {
            if (await userManager.Users.AnyAsync(x => x.UserName == registerDto.userName))
            {
                return BadRequest("El nombre de usario ya se encuentra en uso por favor escriba otro");
            }

            var user = new AppUser
            {
                UserName = registerDto.userName,
                firstName = registerDto.firstName,
                lastName = registerDto.lastName,
                Email = registerDto.email,
                address = registerDto.address,
                birthDate = registerDto.birthDate,
                country = registerDto.country,
                city = registerDto.city,
                gender = registerDto.gender
            };

            var result = await userManager.CreateAsync(user, registerDto.password);

            if (result.Succeeded)
            {
                return new UserDto
                {
                    DisplayName = registerDto.userName,
                    Token = tokenService.CreateToken(user),
                    Username = user.UserName
                };
            }

            return BadRequest("Hubo problema registrando el usuario favor valide sus datos");
        }
    }
}
