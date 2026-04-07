import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import NoPageFound from "../PublicPages/NoPageFound";
import CreateCustomer from "../AdminPages/CreateCustomer/CreateCustomer";
import HomePage from "../PublicPages/HomePage/HomePage";
import CreateInvoicePage from "../AdminPages/CreateInvoice/CreateInvoice";
import AdminOverviewPage from "../AdminPages/Overview/OverviewPage";

export const AdminRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/new-customer", element: <CreateCustomer /> },
      { path: "/new-payment", element: <CreateInvoicePage /> },
      { path: "/overview", element: <AdminOverviewPage /> },
      { path: "/*", element: <NoPageFound /> },
    ],
  },
]);
