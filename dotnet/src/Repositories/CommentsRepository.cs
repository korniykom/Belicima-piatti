using System;
using System.Collections.Generic;
using System.Linq;
using src.Domain;

namespace src.Repositories {
    public class CommentRepository {
        public CommentRepository() {
            comments.Add(new Comment(
                0,
                "Delicious and satisfying, this dish is a culinary masterpiece that tickles your taste buds with every bite. A true symphony of flavors that leaves you craving for more. Bon appétit!",
                "User#0"
            ));
        }
        private List<Comment> comments = new List<Comment>();
    private int currentId = 1;
    public IEnumerable<Comment> GetAllComments() {
        return comments;
    }
    public Comment GetCommentById(int id) {
        return comments.FirstOrDefault(d => d.id == id);;
    }
    public Comment AddComment(Comment comment) {
        comment.id = currentId++;
        comments.Add(comment);
        //why?
        return comment;
    }
    public void UpdateComment(int id, Comment updatedComment) {
        var oldComment = GetCommentById(id);
        if(oldComment != null) {
            oldComment.commentText = updatedComment.commentText;
        }
    }
    public void DeleteComment(int id) {
        var commentToDelete = GetCommentById(id);
        if(commentToDelete != null) {
            comments.Remove(commentToDelete);
        } 
    }
    }
}