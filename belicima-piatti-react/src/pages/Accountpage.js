import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Comment from "../components/Comment/Comment";

function Accountpage() {
  return (
    <div className="main-block">
      <PageNav />
      <Comment />
      <h1>Account</h1>
      <Link to="account">Account</Link>
    </div>
  );
}

export default Accountpage;
