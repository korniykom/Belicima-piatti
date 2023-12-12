using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
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

       public List<SmallRecipe> GetSmallRecipes(int page, int pageSize, string category, string country)
        {
            if (page < 1)
            {
                throw new ArgumentException("Page number cannot be less than 1");
            }

            if (pageSize <= 0)
            {
                throw new ArgumentException("Page size must be greater than 0");
            }

            var filteredRecipes = _recipes;

           if (category != null) {
            filteredRecipes = _recipes.Where(r => r.category == category).ToList();
           }

           if (country != null) {
            filteredRecipes = _recipes.Where(r => r.country == country).ToList();
           }

            var startIndex = (page - 1) * pageSize;
            var endIndex = Math.Min(startIndex + pageSize, filteredRecipes.Count());

            return filteredRecipes
                .Skip(startIndex)
                .Take(endIndex - startIndex)
                .Select(r => new SmallRecipe(r))
                .ToList();
        }
    }
}