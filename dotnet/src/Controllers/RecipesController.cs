using Microsoft.AspNetCore.Mvc;
using src.Domain;
using src.Services;
using static src.Domain.Recipe;
namespace project {

    [Route("api")]
    [ApiController]

    public class RecipesController : ControllerBase {
        private RecipesService recipesService;

        public RecipesController(RecipesService service) {
            recipesService = service;
        }

        [HttpGet("recipe/{id}")]
        public ActionResult<Recipe> GetRecipe(int id) {
            var recipe = recipesService.GetRecipe(id);

            if (recipe == null) {
                return NotFound();
            }

            // recipe.ingredients = GetIngredientsForRecipe(id);

            return recipe;
        }

        [HttpGet("recipes")]
        public IList<SmallRecipe> GetSmallRecipes(int page, int pageSize, [FromQuery] string category = null, [FromQuery] string country = null)
        {
            var smallRecipes = recipesService.GetSmallRecipes(page, pageSize, category, country);

            return smallRecipes;
        }
    }
}
