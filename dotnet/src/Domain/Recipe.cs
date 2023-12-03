namespace src.Domain {
    public class Recipe {
        public int id { get; set; }
        public string name { get; set; }
        public string img {get; set;}
        public string description { get; set; }
        public string category { get; set; }
        public string country { get; set; }
        public double score { get; set; }
        public int duration { get; set; }
        public double price { get; set; }
        public int calories { get; set; }
        public List<Ingredient> ingredients { get; set; }
        public List<string> steps { get; set; }

        public Recipe() {
            ingredients = new List<Ingredient>();
        }

        public SmallRecipe ConvertToSmallRecipe() {
            SmallRecipe smallRecipe = new SmallRecipe {
                id = this.id,
                name = this.name,
                img = this.img,
                score = this.score,
                duration = this.duration,
                price = this.price,
                calories = this.calories
            };
            return smallRecipe;
        }
    }

    public class Ingredient {
        public int id { get; set; }
        public string name { get; set; }
        public double price { get; set; }
        public int calories { get; set; }
        public double protein { get; set; }
        public double carbs { get; set; }
        public double fat { get; set; }
    }
}
