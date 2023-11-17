using System.Text.Json;
using src.Domain;

namespace src.Repositories {
    public class RecipesRepository
    {
        private readonly List<Recipe>  _recipes;
        
        public RecipesRepository()
        {
            var fileName = "./data/DishesDetails.json";
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

        public Recipe GetRecipe(int id)
        {
            var recipe = _recipes.FirstOrDefault(r => r.id == id);
            return recipe;
        } 

        public List<SmallRecipe> GetSmallRecipes(int page, int pageSize) {
            var smallRecipes = _recipes.Skip((page - 1) * pageSize)
                                       .Take(pageSize)
                                       .Select(r => new SmallRecipe(r))
                                       .ToList();
            return smallRecipes;
        }

        
    }
}