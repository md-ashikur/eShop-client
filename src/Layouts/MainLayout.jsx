import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
        <div className="font">
       
        <Outlet/>
       
    </div>
    );
};

export default MainLayout;