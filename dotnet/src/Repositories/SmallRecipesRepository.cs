using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using project;
using src.Domain;

namespace src.Repositories
{
  public class SmallRecipesRepository
  {
    private List<SmallRecipe> _small_recipes;

    public SmallRecipesRepository()
    {
      var fileName = "./data/DishesDetails.json";
      try 
      {
        var jsonString = System.IO.File.ReadAllText(fileName);
        _small_recipes = JsonSerializer.Deserialize<List<SmallRecipe>>(jsonString) ?? new List<SmallRecipe>();
      }

      catch (Exception ex)
      {
        Console.WriteLine($"Error reading from file: {ex.Message}");
        _small_recipes = new List<SmallRecipe>();
      }
    }
  }
}