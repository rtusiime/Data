import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"; // Adjust the path as necessary

const Layout = () => {
  return (
    <div className="app-layout">
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;