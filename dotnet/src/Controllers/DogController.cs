using Microsoft.AspNetCore.Mvc;
using src.Domain;
using src.Services;

namespace src.Controllers
{
    [Route("api/dogs")]
    [ApiController]
    public class DogController : ControllerBase
    {
        private DogService dogService;

        public DogController(DogService service)
        {
            dogService = service;
        }

        [HttpGet]
        public IActionResult GetAllDogs()
        {
            var dogs = dogService.GetAllDogs();
            return Ok(dogs);
        }

        [HttpGet("{id}")]
        public IActionResult GetDog(int id)
        {
            var dog = dogService.GetDogById(id);
            if (dog == null)
            {
                return NotFound();
            }
            return Ok(dog);
        }

        [HttpPost]
        public IActionResult AddDog([FromBody] Dog dog)
        {
            var addedDog = dogService.AddDog(dog);
            return CreatedAtAction("GetDog", new { id = addedDog.Id }, addedDog);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateDog(int id, [FromBody] Dog updatedDog)
        {
            dogService.UpdateDog(id, updatedDog);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDog(int id)
        {
            dogService.DeleteDog(id);
            return NoContent();
        }
    }
}
