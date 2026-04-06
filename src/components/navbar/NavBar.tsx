import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function NavBar() {
    const{isAuthenticated, logout} = useAuth0()
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Homepage</Link>
        </li>
        {!isAuthenticated && (
            <li>
            <Link to={"/login"}>Login/Signup</Link>
          </li>
        )}

        {isAuthenticated && (
            <li>
                <button onClick={() => logout()}>Logout</button>
            </li>
        )}



        
      </ul>
    </>
  );
}

export default NavBar;
