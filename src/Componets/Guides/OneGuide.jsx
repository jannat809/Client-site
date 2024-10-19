import { NavLink } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const OnePlace = ({ place }) => {

  const { name, image, experiences,condition, cost, _id } = place;


  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  // name image experiences description cost

  return (
    <div className="card bg-base-100  shadow-xl" data-aos="flip-up" data-aos-earsing="ease-out-cubic">
      <figure>
        <img src={image} className="h-[50vh]" alt="Shoes" />
      </figure>
      <div className="card-body ">
       
        <div className="flex justify-between items-center">
             <h2 className="font-extrabold text-xl p-2">{name}</h2>
             <h2 className=" px-4 border-2 border-[blue] font-bold rounded-full animate-pulse">{condition}</h2>
        </div>

        <div className="flex items-center gap-2 p-2">
          <div className="flex items-center  gap-2">
            <MdWork />
            <p>{experiences} years experience</p>
          </div>

          <div className="flex items-center  gap-2 ">
            <FaDollarSign />
            <p>{cost} dollar</p>
          </div>
        </div>

        <div className=" mt-4 justify-end">
          <NavLink to={`/guides/${_id}`}>
            <button className="btn w-full bg-[orange] hover:bg-[#326FC5] text-white">
              Show Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default OnePlace;
