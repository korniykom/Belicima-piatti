import { useParams } from "react-router-dom";
export default function DetailedDish() {
  const { category } = useParams();

  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
}
