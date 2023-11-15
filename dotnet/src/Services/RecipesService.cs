using System;
using System.Collections.Generic;
using src.Domain;
using src.Repositories;

namespace src.Services {
  public class RecipesService {
    private RecipesRepository recipeRepository;

    public RecipesService(RecipesRepository repository) {
      recipeRepository = repository;
    }

    public Recipe GetRecipe(int id) {
      return recipeRepository.GetRecipe(id);
    }
  }
}