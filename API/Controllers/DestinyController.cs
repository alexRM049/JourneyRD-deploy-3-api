using Application.Destiny;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class DestinyController : BaseApiController
    {
        
        [HttpGet]
        public async Task<ActionResult<List<Destinies>>> GetDestinies()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Destinies>> GetDestiny(Guid id) 
        {
            return await Mediator.Send(new Details.Query{ Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateDestiny(Destinies destiny) 
        {
            return Ok(await Mediator.Send(new Create.Command { Destinies = destiny}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditDestiny(Guid id, Destinies destiny) 
        {
            destiny.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Destiny = destiny }));
        }
        // [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDestiny(Guid id) 
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
