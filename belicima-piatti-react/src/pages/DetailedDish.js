import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RenderDetailedPage from "../components/Detailed Dish Page/RenderDetailedPage";
import Nav from "../components/Nav/Nav";
import StarRating from "../components/Star-Rating/StarRating";
import StepList from "../components/Step-List/Step-List";
const BASE_URL = "http://localhost:5059/api/recipe";

export default function DetailedDish() {
  const { id } = useParams();
  const [pageInfo, setPageInfo] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setPageInfo(data);
      });
  }, []);
  //TODO: add back link
  return (
    <div>
      <Nav title={pageInfo.name} />
      <img
        src="https://www.nexxusdesigns.com/wp-content/uploads/2018/08/custom-404-image.jpg"
        alt="dish img"
      />
      <StarRating rating={pageInfo.score} />
      <div>{pageInfo.description}</div>
      <div>
        <div>{pageInfo.duration}</div>
        <div>{pageInfo.price}</div>
      </div>
      <StepList StepList={pageInfo.steps} />
    </div>
  );
}
