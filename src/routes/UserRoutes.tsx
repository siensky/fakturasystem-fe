import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import NoPageFound from "../PublicPages/NoPageFound";
import HomePage from "../PublicPages/HomePage/HomePage";
import InvoicesPage from "../user/PaymentsPage/PaymentsPage";

export const UserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/invoices", element: <InvoicesPage /> },
      { path: "/*", element: <NoPageFound /> },
    ],
  },
]);
