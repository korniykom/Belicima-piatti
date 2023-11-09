import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import StarRating from "../components/Star-Rating/StarRating"

function Accountpage(){
    return(
        <div className="main-block">
            <PageNav />
            <StarRating rating={3}/>
            <h1>Account</h1>
            <Link to="account">Account</Link>
        </div>
    );
}

export default Accountpage;