import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Infopage(){
    return(
        <div class="main-block">
            <PageNav />
            <h1>Info</h1>
            <Link to="info">Info</Link>
        </div>
    );
}

export default Infopage;