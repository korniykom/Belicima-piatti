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

            try
            {
            var jsonString = System.IO.File.ReadAllText(fileName);
            _recipes = JsonSerializer.Deserialize<List<Recipe>>(jsonString) ?? new List<Recipe>();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error reading from file: {ex.Message}");
                _recipes = new List<Recipe>();
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Recipe> GetRecipe(int id)
        {
            var recipe = _recipes.FirstOrDefault(r => r.id == id);

            if (recipe == null)
            {
                return NotFound();
            }

            recipe.ingredients = GetIngredientsForRecipe(id);

            return recipe;
        }   

        private List<Ingredient> GetIngredientsForRecipe(int recipeId)
        {
            var fileName = "DishesDetails.json";

            try
            {
                var jsonString = System.IO.File.ReadAllText(fileName);
                var recipes = JsonSerializer.Deserialize<List<Recipe>>(jsonString) ?? new List<Recipe>();

                var recipe = recipes.FirstOrDefault(r => r.id == recipeId);
                return recipe?.ingredients ?? new List<Ingredient>();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error reading from file: {ex.Message}");
                return new List<Ingredient>();
            }
        }
    }
}