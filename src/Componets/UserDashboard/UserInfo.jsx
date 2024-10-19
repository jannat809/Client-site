import { useContext , useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";
import SingleUserInfoBooking from "./SingleUserInfoBooking";
import { FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

import { Typewriter } from "react-simple-typewriter";
import SingleHotelBooking from "./SingleHotelBooking";
import SingleGuideBooking from "./SingleGuideBooking";

const UserInfo = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        swal("Log Out Successfully !");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  //  Booking Packages 

  const bookingData = useLoaderData();

  const specificEmailBookings = bookingData.filter(
    (b) => b?.email === user?.email
  );

  console.log(specificEmailBookings);

  const [booking, setBooking] = useState(specificEmailBookings);
  console.log(booking);


  //  Booking Hotels

  const [open,setOpen]=useState([]);
  
  

      fetch('http://localhost:3000/bookings-hotels/')
     .then(res=>res.json())
     .then(data=>setOpen(data.filter((x)=>x?.email===user?.email)))     


      console.log(open);


    
    //  Booking Guide

  const [guides,setGuide]=useState([]);
  
  

  fetch('http://localhost:3000/bookings-guides/')
 .then(res=>res.json())
 .then(data=>setGuide(data.filter((x)=>x?.email===user?.email)))     


  console.log(guides);   


   
  
  // Delete opearation packages

  const deleteFunction = (_id) => {
    fetch(`http://localhost:3000/bookings-packages/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingPackages = booking.filter(
            (booked) => booked._id !== _id
          );
          setBooking(remainingPackages);
          swal(" ", "Travel Booking packages deleted successfully", "success");
        }
      });
  };


    // Delete opearation Hotels

    const deleteFunctionHotels = (_id) => {
      fetch(`http://localhost:3000/bookings-hotels/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingPackages = open.filter(
              (booked) => booked._id !== _id
            );
            setOpen(remainingPackages);
            swal(" ", "Travel Hotel Booking  deleted successfully", "success");
          }
        });
    };

    // Delete opearation Guide

   

    const deleteFunctionGuides = (_id) => {
      fetch(`http://localhost:3000/bookings-guides/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingPackages = guides.filter(
              (booked) => booked._id !== _id
            );
            setGuide(remainingPackages);
            swal(" ", "Tour Guide Booking  deleted successfully", "success");
          }
        });
    };

  const wish = `Welcome , ${user.email} to Travel.com `;
  const wish2 = "Enjoy Fill & Chill";
  const wish3 = "Tour The World";

  return (
    <div className="font-serif">
      <Helmet>
        <title>Travel | User Dashboard</title>
      </Helmet>

      <div className="bg-[#4c5e76]">
        <div className=" text-center px-5  h-[350px] md:h-[200]  py-16">
          <h1 className="text-[orange] text-2xl font-bold mb-12 md:pb-0">
            {/* typewritter */}
            <Typewriter
              words={[wish, wish2, wish3]}
              loop={true} // Set true to loop the typewriter effect
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={100}
            />
          </h1>

          <div className="flex justify-center items-center my-5 ">
           
            <a href='/' className="text-[white] bg-[orange] hover:bg-[#326FC5] rounded-md px-10 py-3  mr-2 text-[24px] font-extrabold border-2">
              
                <FaHome />
              
            </a>

            <a
              onClick={handleLogout}
              className="text-[white] bg-[orange] hover:bg-[#326FC5] rounded-md px-10 py-3  mr-2 text-base font-bold border-2"
            >
              Log Out
            </a>
          </div>
        </div>
      </div>


      

      <div className="bg-base-200 py-10">

        {/*packages booking data load */}

        <div className="">
          <h1 className="text-center text-3xl font-bold my-10">
             Packages Booking History
          </h1>

          <div className="overflow-x-auto border-4 rounded mx-2 my-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="border-4 shadow-2xl text-base font-extrabold text-black">
                  <th className="border-4 shadow-xl">No</th>
                  <th className="border-4 shadow-xl">Place Image</th>
                  <th className="border-4 shadow-xl">Place Name</th>
                  <th className="border-4 shadow-xl">Price</th>
                  <th className="border-4 shadow-xl">Hotel Image</th>
                  <th className="border-4 shadow-xl">Hotel Name</th>
                  <th className="border-4 shadow-xl">Hotel Location</th>
                  <th className="border-4 shadow-xl">Post Date</th>
                  <th className="border-4 shadow-xl">Status</th>
                  <th className="border-4 shadow-xl">Actions</th>
                </tr>
              </thead>

              <tbody>
                {booking.map((booked, index) => (
                  <SingleUserInfoBooking
                    index={index}
                    key={booked._id}
                    booked={booked}
                    deleteFunction={deleteFunction}
                  ></SingleUserInfoBooking>
                ))}
              </tbody>
            </table>
          </div>
        </div>



         {/*Hotel booking data load */}

         <div className="">
          <h1 className="text-center text-3xl font-bold my-10">
             Hotels Booking History 
          </h1>

          <div className="overflow-x-auto border-4 rounded mx-2 my-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="border-4 shadow-2xl text-base font-extrabold text-black">
                  <th className="border-4 shadow-xl">No</th>
                  <th className="border-4 shadow-xl">Hotel Image</th>
                  <th className="border-4 shadow-xl">Hotel Name</th>
                  <th className="border-4 shadow-xl">Hotel Location</th>
                  <th className="border-4 shadow-xl">Price</th>
                  <th className="border-4 shadow-xl">Date</th>
                  <th className="border-4 shadow-xl">Status</th>
                  <th className="border-4 shadow-xl">Actions</th>
                </tr>
              </thead>

              <tbody>
                {open.map((booked, index) => (
                  <SingleHotelBooking
                    index={index}
                    key={booked._id}
                    booked={booked}
                    deleteFunctionHotels={deleteFunctionHotels}
                  ></SingleHotelBooking>
                ))}
              </tbody>
            </table>
          </div>
        </div>







        {/*Guide booking data load */}

          <div className="">
          <h1 className="text-center text-3xl font-bold my-10">
             Tour Guide Booking History 
          </h1>

          <div className="overflow-x-auto border-4 rounded mx-2 my-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="border-4 shadow-2xl text-base font-extrabold text-black">
                  <th className="border-4 shadow-xl">No</th>
                  <th className="border-4 shadow-xl">Image</th>
                  <th className="border-4 shadow-xl">Name</th>
                  <th className="border-4 shadow-xl">Experience</th>
                  <th className="border-4 shadow-xl">Hiring Cost</th>
                  <th className="border-4 shadow-xl">Date</th>
                  <th className="border-4 shadow-xl">Status</th>
                  <th className="border-4 shadow-xl">Actions</th>
                </tr>
              </thead>

              <tbody>
                {guides.map((booked, index) => (
                  <SingleGuideBooking
                    index={index}
                    key={booked._id}
                    booked={booked}
                    deleteFunctionGuides={deleteFunctionGuides}
                  ></SingleGuideBooking>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>
    </div>
  );
};

export default UserInfo;
