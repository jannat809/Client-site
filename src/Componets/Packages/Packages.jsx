import { Helmet } from "react-helmet-async";
import { Form, NavLink, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

const Packages = () => {
  // load all places
  const packages = useLoaderData();

  const [search, setSearch] = useState("");

  return (
    <div className="font-serif">
      <Helmet>
        <title>Travel | Packages</title>
      </Helmet>

      <h1 className="text-xl md:text-2xl font-bold mt-14 mb-8 text-[#FFA500] px-2 md:px-4">
        Popular Packages 
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-12 px-2 md:px-4">
        {packages.filter((packaged) => {
            return search.toLowerCase() === ""
              ? packaged
              : packaged.hotelLocation.toLowerCase().includes(search)}).map((packaged) => (<div key={packaged._id} className="card bg-base-100  shadow-xl">
                <figure>
                  <img src={packaged.placeImage} className="h-[50vh]" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{packaged.placeName}</h2>
                  <p>{packaged.hotelLocation}</p>
                  <p>$ {packaged.price}</p>
                  <div className="card-actions mt-4 justify-end">
                    <NavLink to ={`/packages/${packaged._id}`}>
                      <button className="btn  bg-[orange] hover:bg-[#326FC5] text-white"
                      >
                       Check In
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

export default Packages;
