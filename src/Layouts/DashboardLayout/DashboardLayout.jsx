import { NavLink, Outlet } from "react-router-dom";

import Footer from "../../Components/Footer";
import "./DashboardLayout.css";
import Navbar from "../../Components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-5 ">
      <div className=" text-white bg-base-100 px-8 h-screen sticky top-20 flex items-center justify-center w-full">
        <ul className="menu bg-primary h-[90vh] text-lg rounded-2xl w-full  ">
          <li>
            <NavLink to={"/"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"list"}>Product List</NavLink>
          </li>
          <li>
            <NavLink to={"add"}>Product Add</NavLink>
          </li>
         
        </ul>
      </div>

      <div className="col-span-4">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
