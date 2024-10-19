import { Helmet } from "react-helmet-async";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Travel | Dashboard</title>
      </Helmet>

      <div className="flex">
        {/* sidebar */}
        <Sidebar></Sidebar>
                    
        {/* content */}
        <div className="text-center  w-full py-5">
            
            <Outlet></Outlet>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
