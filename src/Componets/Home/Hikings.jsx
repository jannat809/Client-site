import { NavLink } from "react-router-dom";

const Hikings = () => {
  return (
    <div className="my-16 mx-2 md:mx-8 xl:mx-0 px-2 md:px-4 font-serif">
      <h1 className="text-xl text-center md:text-2xl font-bold mt-14 mb-8 text-[#FFA500]">
        Why Choose Us?
      </h1>

      {/* 3 sections */}
      <div className=" card grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  bg-base-200 px-4 py-16 rounded-t-2xl rounded-b-none">
        <div>
          <div className=" px-2 flex justify-center ">
            <img
              className="rounded-full w-[150px] h-[150px]"
              src="https://i.ibb.co.com/Bs21zb4/download-3.jpg"
              alt=""
            />
          </div>
          <h1 className="text-center mt-5 mb-4 text-xl font-bold">350+ Hikings</h1>
          <h1 className="">
            Hiking offers a refreshing escape into nature, providing physical
            exercise and mental relaxation. The stunning views, fresh air, and
            sense of accomplishment make it incredibly rewarding.
          </h1>
        </div>

        <div>
          <div className=" px-2 flex justify-center ">
            <img
              className="rounded-full w-[150px] h-[150px]"
              src="https://i.ibb.co.com/kKVWYtM/6ad87d0d823743c8c3374e76e1818b2c.jpg"
              alt=""
            />
          </div>
          <h1 className="text-center mt-5 mb-4 text-xl font-bold">200+ Sea View</h1>
          <h1 className="">
            A sea view provides a calming, picturesque experience. The rhythmic
            sound of waves, fresh ocean breeze, and stunning sunsets create a
            perfect setting for relaxation.
          </h1>
        </div>

        <div>
          <div className=" px-2 flex justify-center ">
            <img
              className="rounded-full w-[150px] h-[150px]"
              src="https://i.ibb.co.com/Bs21zb4/download-3.jpg"
              alt=""
            />
          </div>
          <h1 className="text-center mt-5 mb-4 text-xl font-bold">
            2000+ Customers
          </h1>
          <h1 className="">
            Outstanding customer support! Friendly and knowledgeable staff
            quickly resolved my issue. Their commitment to customer satisfaction
            exceeded my expectations. Highly recommended.
          </h1>
        </div>
      </div>

      {/* card */}

      <div className="hero bg-base-200 rounded-b-2xl  bg-opacity-25" style={{ backgroundImage: "url(https://i.ibb.co.com/3rftw97/nature-landscape-with-black-sand-beach.jpg)" }}>
        <div className="hero-content grid gird-cols-1 md:grid-cols-2 gap-4 ">
          <div className="text-white">
            <h1 className="text-3xl font-bold">
              Wonderful Travel Experience Nin There
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <NavLink to='http://localhost:5173/packages'>
              <button className="btn bg-[orange] hover:bg-[#326FC5] border-none text-white">Get Started</button>
            </NavLink>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/LChJ4MT/futuristic-landscape-dubai.jpg"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hikings;
