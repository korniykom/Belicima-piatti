import { Link } from "react-router-dom";
import "./Startpage.css";

function Startpage() {
  return (
    <Link to="ChooseCategory" className="deco-lable">
      <div className="main-block">
        <div class="format-to-lable">
          <h1 className="start-lable">Belicima piatti</h1>
          <h3 className="extra-lable">bon appetito</h3>
        </div>
      </div>
    </Link>
  );
}

export default Startpage;