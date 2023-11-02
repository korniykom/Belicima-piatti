import { Link } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <li>
        <Link to="/">Menu</Link>
      </li>
      <li>
        <Link to="/info">Info</Link>
      </li>
      <li>
        <Link to="/account">Account</Link>
      </li>
    </nav>
  );
}

export default PageNav;
