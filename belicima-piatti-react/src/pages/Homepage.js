import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Menupage(){
    return(
        <div className="main-block">
            <PageNav />
            <h1>Menu</h1>
            <Link to="menu">Menu</Link>
        </div>
    );
}

export default Menupage;