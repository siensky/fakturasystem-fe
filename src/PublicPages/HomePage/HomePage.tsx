import { useAuth0 } from "@auth0/auth0-react";

function HomePage() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <>
      <h1>Home page</h1>
      {isAuthenticated && (
        <div>
          <h1>Welcome {user?.nickname}</h1>
        </div>
      )}
    </>
  );
}

export default HomePage;
