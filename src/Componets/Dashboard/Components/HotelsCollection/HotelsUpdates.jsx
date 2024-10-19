import swal from "sweetalert";
import SingleHotel from "./SingleHotel";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const HotelsUpdates = () => {


  // all hotels data loaded
  const loadedData = useLoaderData();

  const [hotels, setHotels] = useState(loadedData);

  
  // Delete opearation

  const deleteFunction = (_id) => {
    fetch(`http://localhost:3000/hotels/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingHotels = hotels.filter((hotel) => hotel._id !== _id);
          setHotels(remainingHotels);
          swal(" ", "Travel hotel deleted successfully", "success");
        }
      });
  };
 

  return (

    <div className="font-serif">
      
    <h1 className="text-center text-[orange] text-xl md:text-3xl font-bold mt-24 mb-20">
      All Hotels Database Overview </h1>

    {/* table */}
    <div className="overflow-x-auto border-4 border-[#326FC5] rounded mx-2 my-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-4 shadow-2xl text-base font-extrabold text-black">
            <th className="border-4 shadow-xl">No</th>
            <th className="border-4 shadow-xl">Image</th>
            <th className="border-4 shadow-xl">Name</th>
            <th className="border-4 shadow-xl">Location</th>
            <th className="border-4 shadow-xl">Living Cost</th>
            <th className="border-4 shadow-xl">Actions</th>
          </tr>
        </thead>

        <tbody>
          {hotels.map((hotel, index) => (
            <SingleHotel
              index={index}
              key={hotel._id}
              hotel={hotel}
              deleteFunction={deleteFunction}
            ></SingleHotel>
          ))}
        </tbody>
      </table>
    </div>
  </div>
   
  );
};

export default HotelsUpdates;
