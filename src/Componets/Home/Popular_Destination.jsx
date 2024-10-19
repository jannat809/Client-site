import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Popular_Destination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3, // Number of cards to show at a time
    slidesToScroll: 1, // Number of cards to scroll at a time
    autoplay: true, // Enable auto sliding
    // autoplaySpeed: 200, // Auto slide every 2 seconds
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    fetch("destination.json")
      .then((res) => res.json())
      .then((data) => setTestomonial(data));
  }, []);

  return (
    <div className="w-full px-5 md:mx-5 lg:mx-0 xl:px-0 my-14 font-serif">
      <h1 className="text-xl md:text-2xl font-bold mt-14  text-[#FFA500]">
        Popular Destinations
      </h1>
      <p className="my-2 font-medium">
        From historical cities to natural specteculars , come see the best of
        the world !
      </p>
      <Slider {...settings}>
        {testmonial.map((card) => (
          <div key={card._id} className=" h-full px-2 py-4">
            <div className="bg-[#ffffff] p-6 text-center border border-gray-200 rounded-lg shadow-lg">
              <div>
                <div className="flex justify-center">
                  <img
                    src={card.image}
                    className="h-[200px] md:w-full"
                    alt="Shoes"
                  />
                </div>
                <div className=" grid grid-cols-2 justify-center md:justify-between items-center py-4">
                  <h2 className="md:text-2xl font-extrabold">{card._id}</h2>
                  <p className="md:text-xl font-bold">{card.name}</p>
                </div>
              </div>
            </div>

            {/* <div className=" bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={card.image}
                  className="h-[200px] md:w-full"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body grid grid-cols-2 justify-between items-center">
                <h2 className="text-2xl font-extrabold">{card._id}</h2>
                <p className="text-xl font-bold">{card.name}</p>
              </div>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Popular_Destination;
