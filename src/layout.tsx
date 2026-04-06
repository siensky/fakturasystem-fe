import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";


function Layout() {
  return (
 
          <div app-layout>
            <NavBar />
            <main className="app-content">
              <Outlet />
            </main>
            <Footer />
          </div>
    
  );
}

export default Layout;
