import { Link } from "react-router-dom";

function UserNavLinks() {
  return (
    <>
      <Link to={"/invoices"}>My invoices</Link>
    </>
  );
}

export default UserNavLinks;
