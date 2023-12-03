using Microsoft.AspNetCore.Mvc;
using src.Domain;
using src.Services;
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

         [HttpGet("recipes/{category}")]
        public IList<SmallRecipe> GetSmallRecipes(string category, int page, int pageSize)
        {
            var smallRecipes = recipesService.GetSmallRecipes(category, page, pageSize);

            if (smallRecipes == null)
            {
                return NotFound();
            }

            return smallRecipes;
        }
    }
}
