import { createBrowserRouter } from "react-router-dom";
import NoPageFound from "../PublicPages/NoPageFound";
import Layout from "../layout";
import HomePage from "../PublicPages/HomePage/HomePage";
import LoginPage from "../PublicPages/Login/LoginPage";

export const PublicRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "p", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/*", element: <NoPageFound /> },
    ],
  },
]);
