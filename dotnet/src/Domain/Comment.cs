namespace src.Domain {
    public class Comment {
        //Constructor
        public Comment(int id, string commentText, string commentatorName) {
            this.id = id;
            this.commentText = commentText;
            this.commentatorName = commentatorName;
        }
        public int id { get; set; }
        public string commentText { get; set;}
        public string commentatorName { get; set;}
    }
}
