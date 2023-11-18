import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Nav from "../components/Nav/Nav";

export default function Dish() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  var page = searchParams.get("page");
  var pageSize = searchParams.get("pageSize");

  return (
    <div>
      <Nav backLink="/" title={`Страва ${id}`} />
      <div>{id}</div>
      <div>{page}</div>
      <div>{pageSize}</div>
    </div>
  );
}
