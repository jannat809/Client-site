import banner1 from "../../../public/banner1.png";
import banner3 from "../../../public/banner2.jpg";
import banner2 from "../../../public/banner3.jpg";
import banner4 from "../../../public/banner4.jpg";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";


const Banner = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1, // Number of cards to show at a time
    slidesToScroll: 1, // Number of cards to scroll at a time
    autoplay: true, // Enable auto sliding
    // autoplaySpeed: 200, // Auto slide every 2 seconds
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  let [testmonial, setTestomonial] = useState([]);

  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setTestomonial(data));
  }, []);


  return (


    <div className="w-full px-5 md:px-4 xl:px-0 my-4">
    <Slider {...settings}>
      {testmonial.map((card) => (
        <div key={card._id} className="px-2 lg:px-1">
          <div className="bg-[#ffffff] p-6 text-center border border-gray-200 rounded-lg shadow-lg">
            <div>
              <div className="">
                <img
                  className="w-full h-[60vh] rounded-md"
                  src={card.image}
                  alt=""
                />
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>




    // <div className="m-2 xl:m-0">
    //   <div className="carousel w-full rounded-xl">
    //     <div id="item1" className="carousel-item w-full h-[70vh]">
    //       <img src={banner1} className="w-full" />
    //     </div>
    //     <div id="item2" className="carousel-item w-full h-[70vh]">
    //       <img src={banner2} className="w-full" />
    //     </div>
    //     <div id="item3" className="carousel-item w-full h-[70vh]">
    //       <img
    //         src={banner4} 
    //         className="w-full"
    //       />
    //     </div>
    //     <div id="item4" className="carousel-item w-full h-[70vh]">
    //       <img
    //         src={banner3}
    //         className="w-full"
    //       />
    //     </div>
    //   </div>
    //   <div className="flex w-full justify-center gap-2 py-2">
    //     <a href="#item1" className="btn btn-xs">
    //       1
    //     </a>
    //     <a href="#item2" className="btn btn-xs">
    //       2
    //     </a>
    //     <a href="#item3" className="btn btn-xs">
    //       3
    //     </a>
    //     <a href="#item4" className="btn btn-xs">
    //       4
    //     </a>
    //   </div>
    // </div>
  );
};

export default Banner;
