import "./Error.css";
import {BiSolidError} from 'react-icons/bi';
export default function ErrorLoading() {
  return (
    <div className="ErrorLoadingBody">
      <h1 className="InsideOfErrorLoading1">Помилка:</h1>
      <h3 className="InsideOfErrorLoading2">Не вдалося завантажити сторінку</h3>
      <div className="ErrorImgBlock">
        <BiSolidError size = "55px"  className="ErrorLoadingImg"/>
      </div>
    </div>
  );
}
