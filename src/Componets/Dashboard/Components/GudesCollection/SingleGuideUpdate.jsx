import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const SingleGuideUpdate = () => {

  const singlePlacesDataLoad = useLoaderData();

  const { name , image , experiences , description ,condition, cost , _id } = singlePlacesDataLoad;

  // navigate 
  const navigate = useNavigate();

  // Guide Status Update

  const [selectedGuideStatus, setGuideStatus] = useState('');

  const handleChange = (event) => {
    setGuideStatus(event.target.value);
  };


  // <--------------- Places Data Updated ---------------->
  const handlePlaces = async (e) => {
    e.preventDefault();

    const form = e.target;

  
    const name = form.name.value;
    const image = form.image.value;
    const experiences = form.experiences.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const condition = selectedGuideStatus;

    console.log(condition)

    const newPlace = {
      name: name,
      image: image,
      experiences: experiences,
      description: description,
      cost : cost,
      condition: condition
    };

    console.log(newPlace)

    // <-------------------  Post Method : New places added to database ------->
    fetch(`http://localhost:3000/guides/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlace),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal(" ", " Update travel guide information successfully !", "success");
          form.reset();
          navigate('/dashboard/guides-updates')
        }
      });
  };

  return (
    <div className="font-serif">
      <h1 className="text-center text-[orange] text-xl md:text-3xl font-bold mt-16 mb-20">
        Update {name} Information
      </h1>

      {/*  new places added */}
      <form
        onSubmit={handlePlaces}
        className="border-4 rounded xl:mx-2 bg-slate-300 my-12 flex flex-col justify-center py-5 mx-2"
      >
       
       <div className=" text-left grid md:grid-cols-2 gap-2 ">

        {/* travel place name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
          Travel Guide Name
          </h1>
          <input
            type="text"
            name="name"
            id=""
            defaultValue={name}
            className="font-bold w-full my-2 p-2 rounded"
            required
          />
        </div>

        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
          Travel Guide Booking Status
          </h1>
          <select
                className="font-bold w-full my-2 p-2 rounded"
                id="options"
                // value={selectedRole}
                name="condition"
                defaultValue={condition}
                onChange={handleChange}
              >
                 <option value="Free">Free</option>
                 <option value="Booked">Booked</option>
           </select>
        </div>

        </div> 

        {/* travel place image  */}
        <div className="m-5 text-left grid md:grid-cols-3 gap-2 ">
          <div className="">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel Guide Image{" "}
            </h1>
            <input
              type="text"
              name="image"
              id=""
              defaultValue={image}
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>

          {/* place location  */}
          <div className=" col-span-2">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel Guide Experiences
            </h1>
            <input
              type="number"
              name="experiences"
              id=""
              defaultValue={experiences}
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>
        </div>

        {/* travel place name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
          Travel Guide  Description
          </h1>

          <textarea
            rows={5}
            name="description"
            id=""
            defaultValue={description}
            className="font-bold w-full my-2 p-2 rounded"
            required
          ></textarea>
        </div>



            {/* submit button  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5">
          {/* posted date */}
          <div className=" ">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Hiring Cost
            </h1>
            <input
              type="number"
              name="cost"
              id=""
              defaultValue={cost}
              placeholder=""
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>

          <div className=" flex items-end justify-center md:justify-end">

            <button
            type="submit"
            className="btn w-full  md:w-1/2 my-2 p-2 rounded font-extrabold text-base  text-[white] bg-[orange] hover:bg-[#326FC5] border-none"
          >
            Update
          </button>

          </div>

        </div>

      </form>
    </div>
  );
};

export default SingleGuideUpdate;
