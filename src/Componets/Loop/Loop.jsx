import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Loop = () => {

    const allUser=useLoaderData();
    // console.log(allUser)

    return (
        <div className="max-w-7xl mx-auto">
        <Navbar allUser={allUser}></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
         
   </div>
    );
};

export default Loop;