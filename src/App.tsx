import { RouterProvider } from "react-router-dom";
import "./App.css";
import { UserRouter } from "./routes/UserRoutes";
import { PublicRouter } from "./routes/PublicRouter";
import Loading from "./components/loading/Loading";
import { AdminRouter } from "./routes/AdminRoutes";
import useUserRole from "./hooks/useUserRole";

function App() {
  const { isAdmin, isLoading, isAuthenticated } = useUserRole();

  if (isLoading) {
    return <Loading />;
  }

  const getActiveRouter = () => {
    if (!isAuthenticated) return PublicRouter;
    return isAdmin ? AdminRouter : UserRouter
  };

  return (
    <>
      <RouterProvider router={getActiveRouter()} />
    </>
  );
}

export default App;
