namespace src.Domain {
    public class Comment {
        //Constructor
        public Comment(string commentText, string commentatorName) {
            this.commentText = commentText;
            this.commentatorName = commentatorName;
        }
        public int id { get; set; }
        public string commentText { get; set;}
        public string commentatorName { get; set;}
    }
}