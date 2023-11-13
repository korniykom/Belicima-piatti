namespace src.Domain {

    public class SmallRecipe
    {
        public int id { get; set; }
        public string name { get; set; }
        public double score { get; set; }
        public int duration { get; set; }
        public double price { get; set; }
        public int calories { get; set; }

        public SmallRecipe()
        {
        }

       public SmallRecipe(Recipe recipe)
        {
             id = recipe.id;
             name = recipe.name;
             score = recipe.score;
             duration = recipe.duration;
             price = recipe.price;
             calories = recipe.calories;
        }

    }
}
