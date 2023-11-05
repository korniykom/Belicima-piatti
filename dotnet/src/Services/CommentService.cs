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
        public Comment GetCommentById(int id) {
            return commentRepository.GetCommentById(id);
        }
        public Comment AddComment(Comment comment) {
            return commentRepository.AddComment(comment);
        }
    }
}