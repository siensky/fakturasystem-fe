import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

const AUTH0_DOMAIN = process.env.BUN_PUBLIC_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.BUN_PUBLIC_AUTH0_CLIENT_ID;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider 
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    useRefreshTokens={true}
    cacheLocation='localstorage'
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "http://localhost:8080"
    }}
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
)
