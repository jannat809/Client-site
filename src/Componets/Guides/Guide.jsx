// import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import OneGuide from "./OneGuide";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// useEffect(()=>{
//   AOS.init({duration:2000});
// },[])

const Guide = () => {

useEffect(()=>{
    AOS.init({duration:1500});
},[])

 
  
  // load all places
  const places = useLoaderData();
  // const [places, setplaces] = useState(loadPlaces);
  

  return (
    <div className="font-serif">
      <Helmet>
        <title>Travel | Hire Tour Guide</title>
      </Helmet>
      <h1 className="text-xl md:text-2xl font-bold mt-14 mb-8 text-[#FFA500] px-2 md:px-4">
        Our Best Travel Guide
      </h1>

      {/* all places card design */}
      <div data-aos="fill-up" data-aos-earsing="ease-out-cubic" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 px-2 md:px-4">
        {places.map((place) => (
          <OneGuide key={place._id} place={place}></OneGuide>
        ))}
      </div>


    
    </div>
  );
};

export default Guide;
