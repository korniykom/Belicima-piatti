import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./DetailedDish.css";
import Nav from "../components/Nav/Nav";
import Rating from "@mui/material/Rating";
import StarRating from "../components/Star-Rating/StarRating";
import StepList from "../components/Step-List/Step-List";
import Comment from "../components/Comment/Comment";
import ShoppingList from "../components/Shopping-List/Shopping-List";
import Loading from "../components/Loading/Loading";
import ErrorLoading from "../components/ErrorLoading/Error";
import * as React from "react";

const BASE_PAGE_URL = "http://localhost:5059/api/recipe";
const BASE_COMMENTS_URL = "http://localhost:5059/api/comments";

export default function DetailedDish() {
  const { id } = useParams();
  const [pageInfo, setPageInfo] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [error, setError] = useState();
  const [commentRating, setCommentRating] = React.useState(0);
  const [message, setMessage] = useState("");

  let jsonData1 = {
    recipeId: 1,
    text: "example text",
    name: "John",
    score: 3.0,
  };

  const handleUserInput = (event) => {
    setMessage(event.target.value);
    // console.log("value is ", event.target.value);
  };

  const handlePost = (event) => {
    event.preventDefault();
    fetch(`${BASE_COMMENTS_URL}/`, {
      method: "POST",
      body: JSON.stringify(jsonData1),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  useEffect(() => {
    //creating function to fetch data
    const fetchData = async () => {
      setIsLoadingData(true);
      try {
        fetch(`${BASE_PAGE_URL}/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            //console.log(data);
            setIsLoadingData(false);
            setPageInfo(data);
          });
      } catch (e) {
        setError(e);
      }
    };

    //calling function to fetch data
    fetchData();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        fetch(`${BASE_COMMENTS_URL}/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            setComments(data);
            setIsLoading(false);
          });
      } catch (e) {
        setError(e);
      }
    };
    fetchComments();
  }, []);

  if (isLoading) {
    return (
      <div className="Loading">
        <Loading />
      </div>
    );
  }
  //does not work
  if (error) {
    return (
      <div className="Error">
        <ErrorLoading />
      </div>
    );
  }

  return (
    <div className="Page">
      <Nav backLink="javascript:history.back()" title={pageInfo.name} />
      <img className="DishImg" src={pageInfo.img} alt="dish img" />
      <div className="StarRating">
        <StarRating rating={pageInfo.score} starSize={20} />
      </div>
      <div className="Description">{pageInfo.description}</div>
      <div className="TimePrice">
        <div className="Time">{pageInfo.duration} хв.</div>
        <div className="Price">{pageInfo.price} €$ </div>
      </div>
      <div>
        {!isLoadingData && <ShoppingList ShoppingList={pageInfo.ingredients} />}
      </div>
      <div>
        <StepList StepList={pageInfo.steps} />
      </div>
      <p className="CommentsTitle">Коментарі</p>
      <div className="PostComment">
        <div className="post-avatar">
          <div className="photo"></div>
          <div className="name">{"John"}</div>
          <Rating
            size="small"
            name="simple-controlled"
            value={commentRating}
            onChange={(event, newValue) => {
              setCommentRating(newValue);
              // console.log(newValue);
            }}
          />
        </div>
        <div className="post-comment">
          <input
            className="text-box"
            placeholder="Залиште свій коментар"
            type="text"
            onChange={handleUserInput}
            value={message}
          />
          <div className="post" onClick={handlePost}>
            Опублікувати
          </div>
        </div>
      </div>
      <div className="CommentSection">
        {comments.map((comment) => (
          <div>
            <Comment
              name={comment.name}
              text={comment.text}
              rating={pageInfo.score}
              key={comment.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
