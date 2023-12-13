import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";
import Nav from "../components/Nav/Nav";
import Card from "../components/Card/Card";
import Advice from "../components/Advice/Advice";
import PageNavigator from "../components/NumPage/NumPage";

const BAST_LINK = "http://localhost:5001/api/recipes";

export default function Dish() {
  const [searchParams] = useSearchParams();
  const [pageInfo, setPageInfo] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  let page = searchParams.get("page");
  let pageSize = searchParams.get("pageSize");
  let country = searchParams.get("country");
  let category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      /*
      Test link
      http://localhost:5001/api/recipes/%D0%9F%D0%B5%D1%80%D1%88%D1%96%20%D1%81%D1%82%D1%80%D0%B0%D0%B2%D0%B8?page=1&pageSize=5
      http://localhost:3000/dishes/Перші%20страви?page=1&pageSize=5
      */
      let _country = country != null ? `&country=${country}` : "";
      let _category = category != null ? `&category=${category}` : "";
      try {
        fetch(
          `${BAST_LINK}/?page=${page}&pageSize=${pageSize}${_category}${_country}`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setPageInfo(data);
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [ignored]);

  {
    console.log(pageInfo);
  }
  return (
    <div>
      <Nav backLink="/" title={`${category}`} />
      <Advice AdviceText={"Виберіть рецепт!"} />

      {pageInfo.map((dish) => (
        <Card
          key={dish.id}
          id={dish.id}
          name={dish.name}
          img={dish.img}
          score={dish.score}
          duration={dish.duration}
          price={dish.price}
          calories={dish.calories}
        >
          {" "}
        </Card>
      ))}

      <PageNavigator
        category={category}
        page={page}
        ignored={ignored}
        forceUpdate={forceUpdate}
      />
    </div>
  );
}
