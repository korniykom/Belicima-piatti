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
  let titleCountry = "";
  switch (country) {
    case "CN":
      titleCountry = "Китайська кухня";
      break;
    case "UA":
      titleCountry = "Українська кухня";
      break;
    case "US":
      titleCountry = "Американська кухня кухня";
      break;
    case "IT":
      titleCountry = "Італійська кухня";
      break;
    case "SE":
      titleCountry = "Швейцарська кухня";
      break;
    case "MZ":
      titleCountry = "Мозамбіцька кухня";
      break;
    case "GR":
      titleCountry = "Грецька кухня";
      break;
    case "DE":
      titleCountry = "Німецька кухня";
      break;
    case "GB":
      titleCountry = "Британська кухня";
      break;
    case "GE":
      titleCountry = "Грузинська кухня";
      break;
    case "MX":
      titleCountry = "Мексиканська кухня";
      break;
    case "TH":
      titleCountry = "Найкращі рецепти";
      break;
  }
  let titleText =
    country != null && category != null
      ? `${category} \n ${titleCountry}`
      : country == null
      ? `${category}`
      : category == null
      ? `${titleCountry}`
      : "Рецепти";
  useEffect(() => {
    const fetchData = async () => {
      let _country = country != null ? `&country=${country}` : "";
      let _category = category != null ? `&category=${category}` : "";
      console.log(
        `${BAST_LINK}?page=${page}&pageSize=${pageSize}${_category}${_country}`
      );

      try {
        fetch(
          `${BAST_LINK}?page=${page}&pageSize=${pageSize}${_category}${_country}`
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
      <Nav backLink="/" title={`${titleText}`} />
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
        pageSize={pageSize}
        country={country}
      />
    </div>
  );
}
