// RecipesService
using src.Domain;
using src.Repositories;

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

        public IList<SmallRecipe> GetSmallRecipes(string category, int page, int pageSize)
        {
            return recipesRepository.GetSmallRecipes(category, page, pageSize);
        }
    }
}
