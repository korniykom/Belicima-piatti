import { useParams, useSearchParams } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import PageNavigator from "../components/NumPage/NumPage";

export default function Dish() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  var page = searchParams.get("page");
  var pageSize = searchParams.get("pageSize");

  return (
    <div>
      <Nav backLink="/" title={`${category}`} />
      <div>{category}</div>
      <div>{page}</div>
      <div>{pageSize}</div>
      <PageNavigator category={category} page={page} />
    </div>
  );
}
