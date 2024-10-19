import swal from "sweetalert";
import { UploadImage } from "../Hook/UploadImage";
import { useNavigate } from "react-router-dom";

const PackagesAdded = () => {

  const navigate =useNavigate();

  const handlePackages = async (e) => {

    
    e.preventDefault();

    const form = e.target;

    const placeName = form.placeName.value;
    const Image1 = form.placeImage.files[0];
    const price = form.price.value;
    const placeDescription = form.placeDescription.value;
    const hotelName = form.hotelName.value;
    const Image2 = form.hotelImage.files[0];
    const hotelLocation = form.hotelLocation.value;
    const hotelDescription = form.hotelDescription.value;
    const postedDate = form.postedDate.value;

    // upload image
    const imageData1 = await UploadImage(Image1);
    const imageData2 = await UploadImage(Image2);

    const placeImage = imageData1?.data?.url;
    const hotelImage = imageData2?.data?.url;

    const newPackages = {
      placeName: placeName,
      placeImage: placeImage,
      price: price,
      placeDescription: placeDescription,
      hotelName: hotelName,
      hotelImage: hotelImage,
      hotelLocation: hotelLocation,
      hotelDescription: hotelDescription,
      postedDate: postedDate
    };

   // <------------------- POST Method : New packages added to database ------->
    fetch("http://localhost:3000/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPackages),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("", "New travel packages added successfully !", "success");
        form.reset();
        navigate('/dashboard/packages-updates')
      });
  };

  return (
    <div className="font-serif">
      <h1 className="text-center text-[orange] text-xl md:text-3xl font-bold mt-16 mb-20">
        New Packages Added
      </h1>

      {/*  new packages added */}
      <form
        onSubmit={handlePackages}
        className="border-4 rounded xl:mx-2 bg-slate-300  flex flex-col justify-center py-5 mx-2 border-[#326FC5]"
      >
        {/* travel place name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel place name{" "}
          </h1>
          <input
            type="text"
            name="placeName"
            id=""
            placeholder="Enter travel place name"
            className="font-bold w-full my-2 p-2 rounded"
            required
          />
        </div>

        {/* travel place image  */}
        <div className="m-5 text-left grid md:grid-cols-3 gap-2 ">
          <div className="">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel place image{" "}
            </h1>
            <input
              type="file"
              name="placeImage"
              id=""
              className="w-full my-2 py-2 rounded"
              required
            />
          </div>

          {/* Package price  */}
          <div className=" col-span-2">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel package price
            </h1>
            <input
              type="text"
              name="price"
              id=""
              placeholder="Enter travel package price"
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>
        </div>

        {/* travel place name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel place Description{" "}
          </h1>

          <textarea
            rows={5}
            name="placeDescription"
            id=""
            placeholder="Write travel place description"
            className="font-bold w-full my-2 p-2 rounded"
            required
          ></textarea>
        </div>

        {/* travel hotel name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel hotel name{" "}
          </h1>
          <input
            type="text"
            name="hotelName"
            id=""
            placeholder="Enter travel hotel name"
            className="font-bold w-full my-2 p-2 rounded"
            required
          />
        </div>

        {/* travel hotel image  */}
        <div className="m-5 text-left grid md:grid-cols-3 gap-2 ">
          <div className="">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel hotel image{" "}
            </h1>
            <input
              type="file"
              name="hotelImage"
              id=""
              className="w-full my-2 py-2 rounded"
              required
            />
          </div>

          {/* hotel location  */}
          <div className=" col-span-2">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel hotel location
            </h1>
            <input
              type="text"
              name="hotelLocation"
              id=""
              placeholder="Enter travel hotel location"
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>
        </div>

        {/* travel  hotel description  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel hotel Description{" "}
          </h1>

          <textarea
            rows={5}
            name="hotelDescription"
            id=""
            placeholder="Write travel hotel description ........."
            className="font-bold w-full my-2 p-2 rounded"
            required
          ></textarea>
        </div>

        {/* submit button  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5">
          {/* posted date */}
          <div className=" ">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Posted Date
            </h1>
            <input
              type="date"
              name="postedDate"
              id=""
              placeholder=""
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>

          <div className=" flex items-end justify-center md:justify-end">
            <button
              type="submit"
              className="btn w-1/2 my-2 p-2 rounded font-extrabold text-base  text-[white] bg-[orange] hover:bg-[#326FC5] border-none"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PackagesAdded;
