import { useParams } from "react-router-dom";
import Nav from "../components/Nav/Nav";
export default function Dish() {
  const { id } = useParams();

  return (
    <div>
      <Nav backLink="/" title={`Страва ${id}`} />
      <div>{id}</div>
    </div>
  );
}
