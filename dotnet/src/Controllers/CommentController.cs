using Microsoft.AspNetCore.Mvc;
using src.Domain;
using src.Services;

namespace src.Controllers 
{
    [Route("api/comments")]
    [ApiController]
    public class CommentController : ControllerBase 
    {
        private CommentService commentService;
        public CommentController(CommentService service) 
        {
            commentService = service;
        }
        [HttpGet]
        public IActionResult GetAllComments() 
        {
            var comments = commentService.GetAllComments();
            return Ok(comments);
        }

        [HttpGet("{id}")]
        public IActionResult GetComments(int id) 
        {
            var comment = commentService.GetCommentsByRecipeId(id);
            if(comment != null) 
            {
                return Ok(comment);
            } 
            else 
            {
                return NotFound(new Comment());
            }
        }
        [HttpPost]
        public IActionResult AddComment([FromBody] Comment comment) 
        {
            var newComment = commentService.AddComment(comment);
            return CreatedAtAction("GetComments", new { id = newComment.recipeId }, newComment);
        }
        
    }
}