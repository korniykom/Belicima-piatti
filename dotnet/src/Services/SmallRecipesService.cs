using src.Domain;

namespace src.Services {
  public class SmallRecipesService
  {
    private SmallRecipesRepository smallRecipesRepository;

    public SmallRecipesService(SmallRecipesRepository repository) {
      smallRecipesRepository = repository;
    }

    public List<SmallRecipe> GetSmallRecipes(int page, int pageSize)
    {
        return smallRecipesRepository.GetSmallRecipes(page, pageSize);
    }
  }
}
