import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Homepage</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
