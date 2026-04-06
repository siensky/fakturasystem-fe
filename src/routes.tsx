import { createBrowserRouter } from "react-router-dom";
import NoPageFound from "./NoPageFound";
import Layout from "./layout";
import HomePage from "./PublicPages/HomePage/HomePage";
import LoginPage from "./PublicPages/Login/LoginPage";

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/*", element: <NoPageFound /> },
    ],
  },
]);
