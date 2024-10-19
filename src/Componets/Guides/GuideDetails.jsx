import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import swal from "sweetalert";
import { MdWork } from "react-icons/md";




const GuideDetails = () => {



  const loadPlace = useLoaderData();

  const { name, image, experiences, description, cost , condition} = loadPlace;

  const { user } = useContext(AuthContext);
  const [allUser, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((res) => res.json())
      .then((data) => setUser(data.find((a) => a?.email === user?.email)));
  }, []);

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
          name: name,
          image: image,
          experiences: experiences,
          description: description,
          cost:cost,
          date:date,
          transaction : 'pending',
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
      .post("http://localhost:3000/create-payment-guides", {
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
    <form onSubmit={handleSubmit} className=" font-serif md:px-4 md:my-12">
      

      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">

        <div className="mx-2 md:mx-0">
             <img src={image} className="w-full h-[60vh]  rounded-xl " alt="" />
        </div>

        {/* Reason to stay {name} */}

        <div className=" rounded-md border-[blue] flex flex-col justify-center">

        <h1 className="mt-12 lg:mt-0 mx-6  text-lg md:text-2xl  font-bold mb-4 text-[#FFA500]">
        About {name}
        </h1>

        <h1 className="mt-12 lg:mt-0 mx-6    font-bold mb-4">
        <MdWork  className="inline mr-2"/>  {experiences} years experience
        </h1>

        {parts.map((part, index) => (
          <li key={index} className="mx-2 mb-4  font-medium px-5">
            {part}
          </li>
        ))}

        <div className="grid grid-cols-1  md:grid-cols-3 w-full justify-center gap-5 mt-10 px-6">
          <h1 className="btn bg-[orange] mb-4 text-white font-bold px-2">
            $ {cost}
          </h1>

          <input
            name="date"
            className="border-4  rounded-md h-12 px-2"
            type="date"
          />

          {allUser?.role === "admin" || condition==='Booked' ? (
            <button
              type="submit"
              disabled
              className="btn cursor-not-allowed bg-[orange] hover:bg-[#326FC5] text-white  mb-4  font-bold px-2"
            >
              Hiring 
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

export default GuideDetails;
