
using Microsoft.AspNetCore.Mvc;
using src.Domain;
using src.Services;
namespace project {

    [Route("api/recipes")]
    [ApiController]

    public class RecipesController : ControllerBase {
        private RecipesService recipesService;

        public RecipesController(RecipesService service) {
            recipesService = service;
        }

        [HttpGet("{id}")]
        public ActionResult<Recipe> GetRecipe(int id) {
            var recipe = recipesService.GetRecipe(id);

            if (recipe == null) {
                return NotFound();
            }

            // recipe.ingredients = GetIngredientsForRecipe(id);

            return recipe;
        }

        [HttpGet("{page}/{pageSize}")]
        public ActionResult<IList<SmallRecipe>> GetSmallRecipes(int page, int pageSize) {
            var smallRecipes = recipesService.GetSmallRecipes(page, pageSize);

            if (smallRecipes == null) {
                return NotFound();
            }

            return smallRecipes;
        }
    }
}
