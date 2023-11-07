using System;
using System.Collections.Generic;
using src.Domain;
using src.Repositories;

namespace src.Services {
    public class CommentService {
        private CommentRepository commentRepository;
        public CommentService(CommentRepository repository) {
            commentRepository = repository;
        }
        public IEnumerable<Comment> GetAllComments() {
            return commentRepository.GetAllComments();
        }
        public List<Comment> GetCommentsByRecipeId(int id) {
            return commentRepository.GetCommentByRecipeId(id);
        }
        public Comment AddComment(Comment comment) {
            return commentRepository.AddComment(comment);
        }
    }
}