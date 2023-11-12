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
    }
}