using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Text.Json;
using project;

namespace src.Domain {

  public class SmallRecipe
  {
    
    public int id {get; set;}
    public string name {get; set;}
    public double score {get; set;}
    public int duration {get; set;} 
    public double price {get; set;}
    public int calories {get; set;}


  }
}