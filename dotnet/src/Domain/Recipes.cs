using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Text.Json;
using project;

namespace project{
    public class Recipes
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public double score { get; set; }
        public int duration { get; set; }
        public double price { get; set; }
        public int calories { get; set; }

        public Ingredient ingredient { get; set; } 
        public List<Ingredient> Ingredients { get; set; }

        public Recipes()
        {
            ingredient = new Ingredient(); 
            Ingredients = new List<Ingredient>();
        }
    }

    public class Ingredient {
        public int id { get; set; }
        public string name { get; set; }
        public double price { get; set; }
        public int calories { get; set; }
    }
}