import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import PageNavigator from "../components/NumPage/NumPage";

function Menupage(){
    return(
        <div className="main-block">
            <PageNavigator />
            <PageNav />
            <h1>Menu</h1>
            <Link to="menu">Menu</Link>
        </div>
    );
}

export default Menupage;