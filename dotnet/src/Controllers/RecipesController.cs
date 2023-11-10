using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel;
using System.Text.Json;
using System.IO;
using System.Security.AccessControl;
using project;

namespace project{

    [Route("api/[controller]")]
    [ApiController]

    public class RecipesController : Recipes
    {
        private readonly List<Ingredient> _recipes;

        public RecipesController()
        {
            var fileName = "DishesDetails.json";
            var jsonString = File.ReadAllText(fileName);
            Ingredient _recipes = JsonSerializer.Deserialize<Ingredient>(jsonString)!;
        }

        [HttpGet("{id}")]
        public ActionResult<Ingredient> GetRecipe(int id)
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