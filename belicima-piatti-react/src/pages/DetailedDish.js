import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RenderDetailedPage from "../components/Detailed Dish Page/RenderDetailedPage";
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
        console.log(data);
        setPageInfo(data);
      });
  }, []);
  return (
    <div>
      <RenderDetailedPage details={pageInfo} />
    </div>
  );
}
