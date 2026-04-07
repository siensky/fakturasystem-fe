import { Link } from "react-router-dom";


export default function NoPageFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for doesn’t exist.</p>

      <Link to="/" className="notfound-link">
        Go back home
      </Link>
    </div>
  );
}
