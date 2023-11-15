using System.Text.Json;
using src.Domain;
//RecipesRepository

namespace src.Repositories{
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

        public List<SmallRecipe> GetSmallRecipes(int page, int pageSize)
        {
            if (page < 1)
            {
                throw new ArgumentException("Page number cannot be less than 1");
            }
            var startIndex = (page - 1) * pageSize;
            var endIndex = Math.Min(_smallRecipes.Count, startIndex + pageSize);
            return recipes.Select(r => new SmallRecipe(r)).ToList().Skip(startIndex).Take(endIndex - startIndex).ToList();
        }
    }
}