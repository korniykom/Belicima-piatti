using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using project;
using src.Domain;

namespace project{

    [Route("api/[controller]")]
    [ApiController]

    public class RecipesController : ControllerBase
    {
        private readonly List<Recipe>  _recipes;

        public RecipesController()
        {
            var fileName = "DishesDetails.json";
            var jsonString = System.IO.File.ReadAllText(fileName);
            _recipes = JsonSerializer.Deserialize<List<Recipe>>(jsonString)!;
        }

        [HttpGet("{id}")]
        public ActionResult<Recipe> GetRecipe(int id)
        {
            var recipe = _recipes.FirstOrDefault(r => r.id == id);

            if (recipe == null)
            {
                return NotFound(); 
            }
            return recipe;
        }
    }
}