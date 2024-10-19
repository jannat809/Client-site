import { useEffect, useState } from "react";
import CustomShapeBarChart from "./CustomShapeBarChart";
import PieChartWithCustomizedLabel from "./PieChartWithCustomizedLabel";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import StatisticUserBookingInfo from "./StatisticUserBookingInfo";
import StatisticHotelsInfo from "./StatisticHotelsInfo";
import StatisticGuideBooking from "./StatisticGuideBooking";

const Statistics = () => {
  
  
  // data load 

// users length find
const [user, setUser] = useState([]);

useEffect(()=>{
  fetch('http://localhost:3000/users')
  .then((res) => res.json())
  .then((data) => setUser(data));
},[])
 


// users lenth end 


 // places length find
 const [place, setPlace] = useState([]);

 useEffect(()=>{
  fetch('http://localhost:3000/guides')
   .then((res) => res.json())
  .then((data) => setPlace(data));
},[])
 

 // places lenth end 


 // hotels length find
 const [hotel, setHotel] = useState([]);

 
 useEffect(()=>{
  fetch('http://localhost:3000/hotels')
   .then((res) => res.json())
  .then((data) => setHotel(data));
},[])
 // hotels lenth end 


 // packages length find
 const [packaged, setPackage] = useState([]);


 useEffect(()=>{
  fetch('http://localhost:3000/packages')
   .then((res) => res.json())
   .then((data) => setPackage(data));
},[])
 
 // packages lenth end 


 // blogs length find
 const [blog, setBlog] = useState([]);

 useEffect(()=>{
  fetch('http://localhost:3000/blogs')
   .then((res) => res.json())
   .then((data) => setBlog(data));
},[])



  // booking length find
  const bookingData = useLoaderData();
  const [booking, setBooking] = useState(bookingData);


   //  Booking Hotels

   const [open,setOpen]=useState([]);
  
  

   fetch('http://localhost:3000/bookings-hotels/')
  .then(res=>res.json())
  .then(data=>setOpen(data))


  //  Booking Guide

  const [guides,setGuide]=useState([]);
  
  

  fetch('http://localhost:3000/bookings-guides/')
 .then(res=>res.json())
 .then(data=>setGuide(data))     


  console.log(guides);   



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



  // Delete opearation  packages

  const deleteFunction = (_id) => {
    fetch(`http://localhost:3000/bookings-packages/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingPackages = booking.filter((booked) => booked._id !== _id);
          setBooking(remainingPackages);
          swal(" ", "Booking request canceled", "success");
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


    //  <--------------  update function ------------------->

//   const updateFunction = (_id,updateInfo)=>{
//     console.log(_id,updateInfo);

//     fetch(`http://localhost:3000/bookings/${_id}`,{
//         method:'PUT',
//         headers:{
//           'content-type':'application/json'
//         },
//         body: JSON.stringify(updateInfo)
//     })
//     .then(res=>res.json())
//     .then((data)=>{
//          console.log(data);

//          if(data.modifiedCount > 0){
          
//             // const remainingBooking = booking.filter(booked=>booked._id !== _id);
//             // setBooking(remainingBooking);

//             swal('','Booking Requested accepted','success')

//          }
//     })
// }

  
  return (
    <div className="font-serif">
      <h1 className="text-center pt-5 font-bold text-xl md:text-3xl text-[orange]">
        Statistics Reports
      </h1>

      {/* chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between my-20">
        <CustomShapeBarChart></CustomShapeBarChart>
        <PieChartWithCustomizedLabel></PieChartWithCustomizedLabel>
      </div>

      {/* custom statistics */}

      <div className="border-4 border-[orange] mx-2 rounded-lg shadow-2xl my-16">
        <div className="grid grid-cols-3 border-b border-[#0fd420] mx-2">
          {/* users */}
          <div className="border-r-2 border-red-400  my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Users</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce ">
              {user.length}
            </h1>
          </div>

          {/* places */}
          <div className="border-r-2 border-red-400  my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Total Guide</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {place.length}
            </h1>
          </div>

          {/* Hotels */}
          <div className="my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Hotels</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {hotel.length}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 mx-2">
          {/* Packages */}
          <div className="border-r-2 border-red-400  my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Packages</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {packaged.length}
            </h1>
          </div>

          {/* Blogs */}
          <div className="border-r-2 border-red-400 my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Blogs</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {blog.length}
            </h1>
          </div>

          {/* Bookings */}
          <div className="my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Package Bookings</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {booking.length}
            </h1>
          </div>
        </div>
      </div>


      {/* Packages  Booking requsts Table create */}

       <div>
           
        <h1 className="text-center text-[orange] text-xl md:text-3xl font-bold mt-24 mb-20">
          Packages Booking History 
        </h1>

        <div className="overflow-x-auto border-4 border-[#326FC5] rounded mx-2 my-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="border-4   shadow-2xl text-base font-extrabold text-black">
                <th className="border-4  shadow-xl">No</th>
                <th className="border-4  shadow-xl">Email</th>
                {/* <th className="border-4  shadow-xl">Place Image</th> */}
                <th className="border-4  shadow-xl">Place Name</th>
                {/* <th className="border-4  shadow-xl">Hotel Image</th> */}
                <th className="border-4  shadow-xl">Hotel Name</th>
                <th className="border-4  shadow-xl">Hotel Location</th>
                <th className="border-4  shadow-xl">Price</th>
                <th className="border-4  shadow-xl">Post Date</th>
                <th className="border-4  shadow-xl">Status</th>
                <th className="border-4  shadow-xl">Actions</th>
              </tr>
            </thead>

            <tbody>
              {booking.map((booked, index) => (
                <StatisticUserBookingInfo
                  index={index}
                  key={booked._id}
                  booked={booked}
                  deleteFunction={deleteFunction}
                  // updateFunction={updateFunction}
                ></StatisticUserBookingInfo>
              ))}
            </tbody>
          </table>
        </div>

       </div>

       

        {/* Hotel  Booking requsts Table create */}

        <div>
           
           <h1 className="text-center text-[orange] text-xl md:text-3xl font-bold mt-24 mb-20">
             Hotel Booking History 
           </h1>
   
           <div className="overflow-x-auto border-4 border-[#326FC5] rounded mx-2 my-5">
             <table className="table">
               {/* head */}
               <thead>
                 <tr className="border-4   shadow-2xl text-base font-extrabold text-black">
                   <th className="border-4  shadow-xl">No</th>
                   <th className="border-4  shadow-xl">Email</th>
                   <th className="border-4  shadow-xl">Hotel Image</th>
                   <th className="border-4  shadow-xl">Hotel Name</th>
                   <th className="border-4  shadow-xl">Hotel Location</th>
                   <th className="border-4  shadow-xl">Price</th>
                   <th className="border-4  shadow-xl">Post Date</th>
                   <th className="border-4  shadow-xl">Status</th>
                   <th className="border-4  shadow-xl">Actions</th>
                 </tr>
               </thead>
   
               <tbody>
                 {open.map((booked, index) => (
                   <StatisticHotelsInfo
                     index={index}
                     key={booked._id}
                     booked={booked}
                     deleteFunctionHotels={deleteFunctionHotels}
                     // updateFunction={updateFunction}
                   ></StatisticHotelsInfo>
                 ))}
               </tbody>
             </table>
           </div>
   
          </div>







        {/* Guide  Booking requsts Table create */}

        <div>
           
           <h1 className="text-center text-[orange] text-xl md:text-3xl font-bold mt-24 mb-20">
            Tour Guide Booking History 
           </h1>
   
           <div className="overflow-x-auto border-4 border-[#326FC5] rounded mx-2 my-5">
             <table className="table">
               {/* head */}
               <thead>
                 <tr className="border-4   shadow-2xl text-base font-extrabold text-black">
                    <th className="border-4 shadow-xl">No</th>
                    <th className="border-4 shadow-xl">Email</th>
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
                  <StatisticGuideBooking
                    index={index}
                    key={booked._id}
                    booked={booked}
                    deleteFunctionGudies={deleteFunctionGuides}
                  ></StatisticGuideBooking>
                ))}
              </tbody>
             </table>
           </div>
   
          </div>



     
    </div>
  );
};

export default Statistics;
