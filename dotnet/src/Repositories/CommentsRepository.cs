using System;
using System.Collections.Generic;
using System.Linq;
using src.Domain;

namespace src.Repositories 
{
    public class CommentRepository 
    {
        Dictionary<int, List<Comment>> commentsDictionary = new ();
        private int currentId = 1;
        public CommentRepository() 
        {
            Comment testComment = new (0, "Delicious and satisfying, this dish is a culinary masterpiece that tickles your taste buds with every bite. A true symphony of flavors that leaves you craving for more. Bon appétit!", "User#0");
            commentsDictionary.Add(0, new List<Comment>());
            commentsDictionary[0].Add(testComment);
        }
        public List<Comment> GetAllComments() 
        {
            List<Comment> allComments = new ();
            foreach (var (key, value) in commentsDictionary) 
            {
                allComments.AddRange(value);
            }
            return allComments;
        }
        public List<Comment> GetCommentByRecipeId(int id) 
        {
            if(commentsDictionary.ContainsKey(id))
            {
                return commentsDictionary[id];
            }
            else
            {
                var emptyList = new List<Comment>();
                return emptyList;
            };
        }
        public Comment AddComment(Comment comment) 
        {
            if (!commentsDictionary.ContainsKey(comment.recipeId)) 
            {
              commentsDictionary.Add(comment.recipeId, new List<Comment>());
            }
            commentsDictionary[comment.recipeId].Add(comment);
            comment.commentId = currentId++;
            return comment;
        }
    }
}