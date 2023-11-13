namespace src.Domain 
{
    public class Comment 
    {
        public Comment(int recipeId, string text, string name) 
        {
            this.recipeId = recipeId;
            this.text = text;
            this.name = name;
        }
        public Comment()
        {
            this.recipeId = -1;
            this.text = "Comment does not exist";
            this.name = "Comment does not exist";
        }
        public int recipeId { get; set;}
        public int commentId { get; set; }
        public string text { get; set;}
        public string name { get; set;}
    }
}
