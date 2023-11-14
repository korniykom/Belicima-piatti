using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using project;
using src.Domain;
using src.Services;

namespace project{

    [Route("api/recipe")]
    [ApiController]

    public class RecipesController : ControllerBase
    {
        private RecipesService recipesService;

        public RecipesController(RecipesService service) {
          recipesService = service;
        }

        [HttpGet("{id}")]
        public ActionResult<Recipe> GetRecipe(int id)
        {
            var recipe = recipesService.GetRecipe(id);

            if (recipe == null)
            {
                return NotFound();
            }

            // recipe.ingredients = GetIngredientsForRecipe(id);

            return recipe;
        }   
    }
}