namespace src.Domain {
    public class Comment {
        //Constructor
        public Comment(int recipeId, string text, string name) {
            this.recipeId = recipeId;
            this.text = text;
            this.name = name;
        }
        public int recipeId { get; set;}
        public int commentId { get; set; }
        public string text { get; set;}
        public string name { get; set;}
    }
}
