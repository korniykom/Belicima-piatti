namespace src.Domain 
{
    public class Comment 
    {
        public Comment(int recipeId, string text, string name, double score) 
        {
            this.recipeId = recipeId;
            this.text = text;
            this.name = name;
            this.score = score;
        }
        public Comment()
        {
            this.recipeId = -1;
            this.text = "Comment does not exist";
            this.name = "Comment does not exist";
            this.score = -1;
        }
        public int recipeId { get; set;}
        public int commentId { get; set; }
        public string text { get; set;}
        public string name { get; set;}
        public double score {get; set;}
    }
}
