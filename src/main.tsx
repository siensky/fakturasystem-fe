import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

const AUTH0_DOMAIN = import.meta.env.VITE_PUBLIC_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = import.meta.env.VITE_PUBLIC_AUTH0_CLIENT_ID;

if (!AUTH0_DOMAIN || !AUTH0_CLIENT_ID)
  throw new Error("please provide auth0 domain and client id");

const onRedirectCallback = (appState: any) => {
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      useRefreshTokens={true}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
