import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Feedback = () => {
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
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setTestomonial(data));
  }, []);

  return (
    <div className="w-full  md:mx-5 lg:mx-2 xl:px-0 mt-8 mb-16 font-serif px-2 md:px-4">
      <h1 className="text-xl md:text-2xl font-bold mt-14 mb-8 text-[#FFA500]">
        Traveller Review
      </h1>
      <Slider {...settings}>
        {testmonial.map((card) => (
          <div key={card._id} className=" h-full px-2">
            <div className="bg-[#ffffff] p-6 text-center border border-gray-200 rounded-lg shadow-lg">
              <div>
                <div className="flex justify-center">
                  <img
                    className="rounded-full w-[120px] h-[120px]"
                    src={card.image}
                    alt=""
                  />
                </div>
                <h1 className="text-2xl text-center font-bold  mt-5 mb-2">{card.name}</h1>
                <h1 className="text-left font-medium">{card.details}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
