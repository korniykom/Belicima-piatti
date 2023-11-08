using System;
using System.Collections.Generic;
using System.Linq;
using src.Domain;

namespace src.Repositories {
    public class CommentRepository {
        Dictionary<int, List<Comment>> commentsDictionary = new ();
        private int currentId = 1;
        //Constructor
        public CommentRepository() {
            Comment testComment = new (0, "test text", "test name");

            commentsDictionary.Add(0, new List<Comment>());
            commentsDictionary[0].Add(testComment);
        }

        public List<Comment> GetAllComments() {
            List<Comment> allComments = new ();
            foreach (var (key, value) in commentsDictionary) {
                allComments.AddRange(value);
            }
            return allComments;
        }
        public List<Comment> GetCommentByRecipeId(int id) {
            return commentsDictionary[id];
        }
        public Comment AddComment(Comment comment) {
            if (!commentsDictionary.ContainsKey(comment.recipeId)) {
              commentsDictionary.Add(comment.recipeId, new List<Comment>());
            }
            commentsDictionary[comment.recipeId].Add(comment);
            comment.commentId = currentId++;
            return comment;
        }
    }
}