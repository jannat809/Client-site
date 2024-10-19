
import { useContext, useEffect, useState } from "react";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { Form, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from 'axios';
// import swal from "sweetalert";

const PackagesDetails = () => {
  const loadPackage = useLoaderData();

  const { user } = useContext(AuthContext);


  const [allUser,setUser]=useState(null)

  useEffect(()=>{
    
     fetch(`http://localhost:3000/users`)
     .then(res=>res.json())
     .then(data=>setUser(data.find((a)=>a?.email ===user?.email)))

  },[])


    
    

 

  const {
    placeName,
    placeImage,
    placeDescription,
    hotelName,
    hotelImage,
    hotelLocation,
    hotelDescription,
    price,
    postedDate,
  } = loadPackage;

  // placeDescription convert
  const str1 = placeDescription;
  const parts1 = str1.split("#");

  // hotelDescription convert
  const str2 = hotelDescription;
  const parts2 = str2.split("#");

 


  // <<< ----------- Packages info sent to backend -------------- >>> 

  const handleBooking =(e)=>{


   console.log(user.email)

    e.preventDefault();

    const date = e.target.date.value;
   

    //  console.log(placeName,placeImage,price,hotelName,hotelImage,hotelLocation,date,user.email)
    let newBooking;

     {
       if(date !== ''){

        newBooking={
          placeName:placeName,
          placeImage:placeImage,
          price:price,
          hotelName:hotelName,
          hotelImage:hotelImage,
          hotelLocation:hotelLocation,
          date:date,
          condition:'pending',
          email:user.email
        }

       }

       else{
        swal("", "Please Select Your Tour Date !", "error");
        return;
       }
          
        
       
     }


     console.log(user.email)


  // <-------------------  Post Method : New Packages bookings added to database ------->
    
     
  axios.post("http://localhost:3000/create-paymet",{
  info:newBooking,
   })
  .then((res)=>{
     console.log(res);
 
     const redirectUrl = res.data.paymentUrl;
 
     if(redirectUrl){

        window.location.replace(redirectUrl);

       
     }

 
   })
    
    
    
    
  //  fetch("http://localhost:3000/bookings/", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(newBooking),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     swal("", "New booings added successfully !", "success");
      
  //   });



  }



  return (
    <Form className="pb-10 font-serif md:px-4" onSubmit={handleBooking}>
      <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2 text-[#FFA500]">
        {placeName}
      </h1>
      {/* <h1 className="text-lg  font-extrabold mt-4 mb-2 mx-2">
        Date: {postedDate}
      </h1> */}

      {/* section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  mt-12 mb-2 mx-2 ">
        <div className=" w-full mt-2 mb-6">
          <img src={placeImage} className="h-full w-full rounded" alt="" />
        </div>

        <div className="">

    
        <h1 className="mt-12 lg:mt-0 md:mx-6  text-lg md:text-2xl  font-bold mb-4 text-[#FFA500]">
           Description
        </h1>

          {parts1.map((part, index) => (
          <li key={index} className="mx-2 mb-4 text-lg  font-medium md:px-5">
            {part}
          </li>
        ))}

        </div>
      </div>

      {/* section 3 */}
      <h1 className="text-lg md:text-3xl font-extrabold mt-16 mb-12 mx-2 text-[#FFA500]">
        {hotelName}
      </h1>
      {/* <h1 className="text-lg  font-extrabold md:text-xl  mt-4 mb-2 mx-2">
        {hotelLocation}
      </h1> */}

    <div className="flex flex-col-reverse lg:grid md:grid-cols-2 gap-2 mt-4 mb-2">
        
        
    <div className="">
          

        {parts2.map((part, index) => (
          <li key={index} className=" mb-4 text-lg  font-medium px-4 xl:px-0">
            {part}
          </li>
        ))}

         
          <div className="grid grid-cols-1  md:grid-cols-3 w-full justify-center gap-5 mt-10 px-2 md:px-4 xl:px-0">
            <h1 className="btn bg-[orange] mb-4 text-white font-bold px-2 ">$ {price}</h1>

            <input name="date" className="border-4  rounded-md h-12 px-2" type="date" />

           {
              allUser?.role ==='admin' ? 
              <button
              type="submit"
              disabled
              className="btn cursor-not-allowed bg-[orange] hover:bg-[#326FC5] text-white  mb-4  font-bold px-2"
            >
              Booking Now
            </button>
            :
            <button
            type="submit"
            className="btn  bg-[orange] hover:bg-[#326FC5] text-white  mb-4  font-bold px-2"
          >
            Booking Now
          </button>
           }
          </div>


        </div>

        <div className=" w-full my-4 px-2 md:px-0">
          <img src={hotelImage} className="h-full  w-full rounded" alt="" />
        </div>
      </div>
    </Form>
  );
};

export default PackagesDetails;
