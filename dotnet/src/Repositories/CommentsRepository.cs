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
            int i;
            for(i = 1; i <= 20; i++)
            {
                commentsDictionary.Add(i, new List<Comment>());
            }
            commentsDictionary[1].Add(new Comment (1, "Смачно та ароматно.", "Анна", 5));
            commentsDictionary[1].Add(new Comment (1, "Вимагає певних навичок у кулінарії.", "Максим", 3));
            commentsDictionary[2].Add(new Comment (2, "Завжди зберігає свій смак, навіть наступного дня.", "Софія", 5));
            commentsDictionary[3].Add(new Comment (3, "Страва виглядає дуже апетитно.", "Артем", 5));
            commentsDictionary[3].Add(new Comment (3, "Може бути занадто солодкою або кислою для деяких смаків.", "Вікторія", 3));
            commentsDictionary[4].Add(new Comment (4, "Складність приготування компенсується смаком.", "Олександр", 4));
            commentsDictionary[5].Add(new Comment (5, "Може бути занадто калорійною для тих, хто дотримується дієти.", "Євгенія", 2));
            commentsDictionary[6].Add(new Comment (6, "Додає різноманіття до щоденного раціону.", "Дмитро", 5));
            commentsDictionary[7].Add(new Comment (7, "Вражає своїм кольором та виглядом.", "Катерина", 5));
            commentsDictionary[8].Add(new Comment (8, "Важко знайти всі необхідні інгредієнти.", "Ілля", 3));
            commentsDictionary[9].Add(new Comment (9, "Чудово поєднані інгредієнти.", "Юлія", 5));
            commentsDictionary[10].Add(new Comment (10, "Виглядає дуже апетитно на тарілці.", "Олег", 5));
            commentsDictionary[11].Add(new Comment (11, "Чудовий вибір для вечеринки або прийому гостей.", "Анастасія", 5));
            commentsDictionary[12].Add(new Comment (12, "Може бути занадто важкою для тих, хто дотримується дієти.", "Андрій", 5));
            commentsDictionary[13].Add(new Comment (13, "Страва має приємну текстуру та аромат.", "Валерія", 5));
            commentsDictionary[14].Add(new Comment (14, "Додає енергії та настроює на позитивний лад.", "Іван", 5));
            commentsDictionary[15].Add(new Comment (15, "Вишуканий смак, що залишається в пам'яті.", "Марія", 5));
            commentsDictionary[16].Add(new Comment (16, "Страва виглядає дуже апетитно.", "Павло", 5));
            commentsDictionary[17].Add(new Comment (17, "Подавати гарячою - найкращий спосіб насолодитися цим блюдом.", "Тетяна", 5));
            commentsDictionary[18].Add(new Comment (18, "Може бути занадто солодкою або кислою для деяких смаків.", "Владислав", 4));
            commentsDictionary[19].Add(new Comment (19, "Може бути занадто важкою для тих, хто не любить експериментувати зі смаками.", "Ольга", 3));
            commentsDictionary[20].Add(new Comment (20, "Вимагає певних навичок у кулінарії.", "Роман", 4));
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