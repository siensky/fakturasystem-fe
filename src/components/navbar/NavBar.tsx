import { Link } from "react-router-dom";
import useUserRole from "../../hooks/useUserRole";
import AdminNavLinks from "../AdminNavLinks";
import UserNavLinks from "../UserNavLinks";

function NavBar() {
  const { isAdmin, logout, isAuthenticated, isUser } = useUserRole();

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

        {isAdmin && <AdminNavLinks />}
        {isUser && <UserNavLinks />}

        {isAuthenticated && (
          <div>
            <li>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </li>
            <li>
              <Link to={"/profile"}>My profile</Link>
            </li>
          </div>
        )}
      </ul>
    </>
  );
}

export default NavBar;
