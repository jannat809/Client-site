import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import axios from "axios";

const HotelsDetails = () => {
  const loadHotel = useLoaderData();
  const { user } = useContext(AuthContext);
  const [allUser, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((res) => res.json())
      .then((data) => setUser(data.find((a) => a?.email === user?.email)));
  }, []);

  const { name, image, location, description, livingCost } = loadHotel;

  const hotelName = name;
  const hotelImage = image;
  const hotelLocation = location;

  const str = description;
  const parts = str.split("#");

  // handleSubmit for booking hotel

  const handleSubmit = (e) => {
    console.log(user.email);

    e.preventDefault();

    const date = e.target.date.value;

    //  console.log(placeName,placeImage,price,hotelName,hotelImage,hotelLocation,date,user.email)
    let newBooking;

    {
      if (date !== "") {
        newBooking = {
          hotelName: hotelName,
          hotelImage: hotelImage,
          hotelLocation: hotelLocation,
          livingCost: livingCost,
          date:date,
          condition: "pending",
          email: user.email,
        };
      } else {
        swal("", "Please Select Your Tour Date !", "error");
        return;
      }
    }

    console.log(user.email);

    // <-------------------  Post Method : New Hotel bookings added to database ------->

    axios
      .post("http://localhost:3000/create-payment-hotels", {
        info: newBooking,
      })
      .then((res) => {
        console.log(res);

        const redirectUrl = res.data.paymentUrl;

        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="pb-10 font-serif md:px-4 ">
      <h1 className=" text-xl md:text-2xl font-bold mt-14 mb-14 text-[#FFA500] px-2 md:px-0">
        {name}
      </h1>
      {/* <h1 className="mx-2 mb-2  font-semibold">{location}</h1> */}

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

        <div className="mx-2 md:mx-0">
             <img src={image} className="w-full h-full rounded-xl " alt="" />
        </div>

        {/* Reason to stay {name} */}

        <div>

        <h1 className="mt-12 lg:mt-0 mx-6  text-lg md:text-2xl  font-bold mb-4 text-[#FFA500]">
        Description :
        </h1>

        {parts.map((part, index) => (
          <li key={index} className="mx-2 mb-4  font-medium px-5">
            {part}
          </li>
        ))}

        <div className="grid grid-cols-1  md:grid-cols-3 w-full justify-center gap-5 mt-10 px-6">
          <h1 className="btn bg-[orange] mb-4 text-white font-bold px-2">
            $ {livingCost}
          </h1>

          <input
            name="date"
            className="border-4  rounded-md h-12 px-2"
            type="date"
          />

          {allUser?.role === "admin" ? (
            <button
              type="submit"
              disabled
              className="btn cursor-not-allowed bg-[orange] hover:bg-[#326FC5] text-white  mb-4  font-bold px-2"
            >
              Booking Now
            </button>
               ) : (
            <button
              type="submit"
              className="btn  bg-[orange] hover:bg-[#326FC5] text-white   font-bold px-2"
            >
              Booking Now
            </button>
          )}
        </div>
          
        </div> 


      </div>

    </form>
  );
};

export default HotelsDetails;
