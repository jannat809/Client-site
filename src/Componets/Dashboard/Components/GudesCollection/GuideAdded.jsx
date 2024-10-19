import swal from "sweetalert";
import { UploadImage } from "../Hook/UploadImage";

const GuideAdded = () => {
  // <--------------- Places Data Collected  ---------------->
  const handlePlaces = async (e) => {
    e.preventDefault();

    const form = e.target;


    // name image experiences description cost


    const name = form.name.value;
    const image = form.image.files[0];
    const experiences = form.experiences.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const condition=form.condition.value;

    // upload image
    const imageData = await UploadImage(image);

    const realImage = imageData?.data?.url;

    const newPlace = {
      name: name,
      image: realImage,
      experiences: experiences,
      description: description,
      cost : cost,
      condition: condition,
      
    };

    // <-------------------  Post Method : New places added to database ------->
    fetch("http://localhost:3000/guides", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlace),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("", "New travel guide added successfully !", "success");
        form.reset();
      });
  };

  return (
    <div className="font-serif">
      <h1 className="text-center text-[orange] text-xl md:text-3xl font-bold mt-16 mb-20">
        Travel Guide Information Added
      </h1>

      {/*  new places added */}
      <form
        onSubmit={handlePlaces}
        className="border-4 rounded xl:mx-2 bg-slate-300  flex flex-col justify-center py-5 mx-2 border-[#326FC5]"
      >

  <div className=" text-left grid md:grid-cols-2 gap-2 ">

        {/* travel place name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel Guide Name{" "}
          </h1>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter Travel Guide Name"
            className="font-bold w-full my-2 p-2 rounded"
            required
          />
        </div>

        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel Guide Booking Status{" "}
          </h1>

            <select
                className="font-bold w-full my-2 p-2 rounded"
                id="options"
                // value={selectedRole}
                name="condition"
                // onChange={handleChange}
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
              type="file"
              name="image"  
              id=""
              className="w-full my-2 py-2 rounded"
              required
            />
          </div>

          {/* Experiences */}
          <div className=" col-span-2">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel Guide Experiences
            </h1>
            <input
              type="number"
              name="experiences"  
              id=""
              placeholder="Enter Travel Guide Experiences"
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>
        </div>

        {/* Travel Guide Description  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
          Travel Guide  Description{" "}
          </h1>

          <textarea
            rows={5}
            name="description"   
            id=""
            placeholder="Write Travel Guide Description"
            className="font-bold w-full my-2 p-2 rounded"
            required
          ></textarea>
        </div>

        {/* submit button  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5">
          {/* Hiring Cost */}
          <div className=" ">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Hiring Cost
            </h1>
            <input
              type="number"
              name="cost"  
              id=""
              placeholder="Travel Guide Hiring Cost"
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>

          <div className=" flex items-end justify-center md:justify-end">
            <button
              type="submit"
              className="btn w-full  md:w-1/2 my-2 p-2 rounded font-extrabold text-base  text-[white] bg-[orange] hover:bg-[#326FC5] border-none"
            >
              Post
            </button>
          </div>

        </div>


      </form>
    </div>
  );
};

export default GuideAdded;
