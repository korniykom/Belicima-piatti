import "./Error.css";
import {BiSolidError} from 'react-icons/bi';
export default function ErrorLoading() {
  return (
    <div className="ErrorLoadingBody">
      <div className="sadMen">
        <BiSolidError size = "55px"  className="sadImg"/>
      </div>
      <h1 className="InsideOfErrorLoading">Помилка:</h1>
      <h3 className="InsideOfErrorLoading">Не вдалося завантажити сторінку</h3>
    </div>
  );
}
