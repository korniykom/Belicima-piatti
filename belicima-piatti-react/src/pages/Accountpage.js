import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Accountpage(){
    return(
        <div class="main-block">
            <PageNav />
            <h1>Account</h1>
            <Link to="account">Account</Link>
        </div>
    );
}

export default Accountpage;