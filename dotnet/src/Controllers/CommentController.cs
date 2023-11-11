using Microsoft.AspNetCore.Mvc;
using src.Domain;
using src.Services;

namespace src.Controllers {
    [Route("api/comments")]
    [ApiController]
    public class CommentController : ControllerBase {
        private CommentService commentService;
        //Constructor
        public CommentController(CommentService service) {
            commentService = service;
        }
        /*****[HTTP-GET]*****/
        [HttpGet]
        public IActionResult GetAllComments() {
            var comments = commentService.GetAllComments();
            return Ok(comments);
        }

        [HttpGet("{id}")]
        public IActionResult GetComment(int id) {
            var comment = commentService.GetCommentById(id);
            if(comment != null) {
                return Ok(comment);
            } else {
                return NotFound(new Comment());
            }
        }
        /*****[HTTP-POST]*****/
        [HttpPost]
        public IActionResult AddComment([FromBody] Comment comment) {
            var newComment = commentService.AddComment(comment);
            return CreatedAtAction("GetComment", new { id = newComment.id }, newComment);
        }
        
    }
}