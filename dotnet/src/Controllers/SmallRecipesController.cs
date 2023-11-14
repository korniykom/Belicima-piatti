using Microsoft.AspNetCore.Mvc;
using src.Domain;
using src.Services;

namespace project{

    [Route("api/recipes")]
    [ApiController]

    public class SmallRecipesController : ControllerBase
    {
        private SmallRecipesService smallRecipesService;

        public SmallRecipesController(SmallRecipesService service) {
          smallRecipesService = service;
        }

        [HttpGet("{page}/{pageSize}")]
        public ActionResult<IList<SmallRecipe>> GetSmallRecipes(int page, int pageSize)
        {
            var smallRecipes = smallRecipesService.GetSmallRecipes(page, pageSize);

            if (smallRecipes == null)
            {
                return NotFound();
            }

            return smallRecipes;
        }
    }
}
