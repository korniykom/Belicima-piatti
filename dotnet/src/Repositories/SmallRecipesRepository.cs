using System.Text.Json;
using src.Domain;

public class SmallRecipesRepository
{
    private readonly List<SmallRecipe> _smallRecipes;

    public SmallRecipesRepository()
    {
        var fileName = "./data/DishesDetails.json";
        try
        {
            var jsonString = System.IO.File.ReadAllText(fileName);
            var recipes = JsonSerializer.Deserialize<List<Recipe>>(jsonString) ?? new List<Recipe>();
            _smallRecipes = recipes.Select(r => new SmallRecipe(r)).ToList();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error reading from file: {ex.Message}");
            _smallRecipes = new List<SmallRecipe>();
        }
    }

    public List<SmallRecipe> GetSmallRecipes(int page, int pageSize)
    {
        if (page < 1)
        {
            throw new ArgumentException("Page number cannot be less than 1");
        }
        var startIndex = (page - 1) * pageSize;
        var endIndex = Math.Min(_smallRecipes.Count, startIndex + pageSize);
        return _smallRecipes.Skip(startIndex).Take(endIndex - startIndex).ToList();
    }
}
