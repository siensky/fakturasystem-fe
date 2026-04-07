import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } =
    useAuth0();
  return (
    <>
      {!isAuthenticated && (
        <div>
          <button onClick={() => loginWithRedirect()}>login</button>

          <button
            onClick={() =>
              loginWithRedirect({
                authorizationParams: { screen_hint: "signup" },
              })
            }
          >
            Sign Up
          </button>
        </div>
      )}
    </>
  );
}

export default LoginPage;
