using src.Domain;
using src.Repositories;
using static src.Domain.Recipe;

namespace src.Services
{
    public class RecipesService
    {
        private RecipesRepository recipesRepository;

        public RecipesService(RecipesRepository repository)
        {
            recipesRepository = repository;
        }

        public Recipe GetRecipe(int id)
        {
            return recipesRepository.GetRecipe(id);
        }

        public IList<SmallRecipe> GetSmallRecipes(int page, int pageSize, string category, string country)
        {
            return recipesRepository.GetSmallRecipes(page, pageSize, category, country);
        }
    }
}
