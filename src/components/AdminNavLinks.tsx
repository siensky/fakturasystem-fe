import { Link } from "react-router-dom";

function AdminNavLinks() {
  return (
    <>
      <Link to={"/new-customer"}>Add new customer</Link>
      <Link to={"/new-payment"}>Add new payment</Link>
      <Link to={"/overview"}>Payments</Link>
    </>
  );
}

export default AdminNavLinks;
