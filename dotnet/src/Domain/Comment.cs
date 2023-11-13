namespace src.Domain 
{
    public class Comment 
    {
        public Comment(string commentText, string commentatorName) 
        {
            this.commentText = commentText;
            this.commentatorName = commentatorName;
        }
        public Comment() 
        {
            this.id = -1;
            this.commentatorName = "Comment does not exist";
            this.commentText = "Comment does not exist";
        }
        public int id { get; set; }
        public string commentText { get; set;}
        public string commentatorName { get; set;}
    }
}
