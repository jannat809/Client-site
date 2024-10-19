import { Helmet } from "react-helmet-async";
import { Form, NavLink, useLoaderData } from "react-router-dom";

import { useState } from "react";
import { MdBed } from "react-icons/md";
import { FaBath, FaWifi } from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

const Hotels = () => {
  // load all places
  const hotels = useLoaderData([]);
  console.log(hotels);

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="font-serif">
      <Helmet>
        <title>Travel | Hotels</title>
      </Helmet>

      <div>
           
      </div>
      
      <h1 className="text-xl md:text-2xl font-bold mt-14 mb-8 text-[#FFA500] px-2 md:px-4">
        Popular Hotels
      </h1>

      <Form className="p-2 md:p-0  md:mr-8 flex justify-end items-center  relative">
    
        <LuSearch  className=" absolute mr-10 md:mr-8 text-3xl font-bold" />
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="  my-3 w-full md:w-1/2  lg:w-1/4 border-2   rounded-full p-4   font-bold focus:outline-none"
          placeholder="Location"
        > 

        </input>

       
      </Form>

      {/* all places card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-12  px-2 md:px-4">
        {hotels
          .filter((hotel) => {
            return search === ""
              ? hotel
              : hotel.location.toLowerCase().includes(search);
          })
          .map((hotel) => (
            <div key={hotel._id} className="card bg-base-100  shadow-xl">
              <figure>
                <img src={hotel.image} className="h-[40vh] w-full" alt="Shoes" />
              </figure>
              <div className="card-body">
                
                {/* price  */}
                <div className="flex justify-between items-center  p-2">
                  <h2 className="font-extrabold text-xl">
                    $ {hotel.livingCost}
                  </h2>
                  <button className="text-sm font-bold border-2 border-[#326FC5] px-2 rounded-full  animate-pulse">
                    For Rent
                  </button>
                </div>

                {/* icon */}
                <div className="flex gap-4 items-center font-bold mt-4">
                   
                     <div className="flex gap-4 items-center shadow-xl border-2 border-[#FFA500] rounded-md p-2 w-full">
                         <MdBed />
                         <h1>1 Bed</h1>
                     </div>

                     <div className="flex gap-4 items-center shadow-xl border-2 border-[#FFA500] rounded-md p-2 w-full">
                         <FaBath />
                         <h1>1 Bath</h1>
                     </div>
                    
                   
                </div>

                <div className="flex gap-4 items-center font-bold mb-4">
                   
                   <div className="flex gap-4 items-center shadow-xl border-2 border-[#FFA500] rounded-md p-2 w-full">
                       <FaWifi />
                       <h1>Wifi</h1>
                   </div>

                   <div className="flex gap-4 items-center shadow-xl border-2 border-[#FFA500] rounded-md p-2 w-full">
                       <FaVanShuttle />
                       <h1>Shuttle</h1>
                   </div>
                  
                 
              </div>

                <h2 className="font-extrabold">{hotel.name}</h2>
                <p className="font-medium">{hotel.location}</p>
                <div className=" mt-4">
                  <NavLink to={`/hotels/${hotel._id}`}>
                   
                      <button className="btn w-full  bg-[orange] hover:bg-[#326FC5] text-white text-lg">
                        Details
                      </button>
                   
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hotels;
