import swal from "sweetalert";
import { UploadImage } from "../Hook/UploadImage";

const BlogsAdded = () => {

     // <--------------- Blogs Data Collected  ---------------->
  const handleBlogs = async (e) => {
    e.preventDefault();

    const form = e.target;

    const blogName = form.blogName.value;
    const blogImage = form.blogImage.files[0];
    const writerName = form.writerName.value;
    const blogDescription = form.blogDescription.value;
    const postedDate = form.postedDate.value;

    // upload image
    const imageData = await UploadImage(blogImage);

    const realImage = imageData?.data?.url;

    const newBlog = {
      name: blogName,
      image: realImage,
      writer: writerName,
      description: blogDescription,
      date : postedDate
    };

    // <-------------------  Post Method : New blogs added to database ------->
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("", "New travel blogs added successfully !", "success");
        form.reset();
      });
  };


    return (
      <div className="font-serif">
      <h1 className="text-center text-[orange] text-xl md:text-3xl font-bold mt-16 mb-20">
          New Travel Blogs Added
        </h1>
  
        {/*  new blogs added */}
        <form
          onSubmit={handleBlogs}
          className="border-4 rounded xl:mx-2 bg-slate-300  flex flex-col justify-center py-5 mx-2 border-[#326FC5]"
        >
          {/* travel blog name  */}
          <div className="m-5 text-left">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel blog name{" "}
            </h1>
            <input
              type="text"
              name="blogName"
              id=""
              placeholder="Enter travel blog name"
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>
  
          {/* travel blog image  */}
          <div className="m-5 text-left grid md:grid-cols-3 gap-2 ">
            <div className="">
              <h1 className="text-lg md:text-xl text-left font-bold py-2">
                Travel blog image{" "}
              </h1>
              <input
                type="file"
                name="blogImage"
                id=""
                className="w-full my-2 py-2 rounded"
                required
              />
            </div>
  
            {/* blog writer name  */}
            <div className=" col-span-2">
              <h1 className="text-lg md:text-xl text-left font-bold py-2">
                Writer Name
              </h1>
              <input
                type="text"
                name="writerName"
                id=""
                placeholder="Enter travel place location"
                className="font-bold w-full my-2 p-2 rounded"
                required
              />
            </div>
          </div>
  
          {/* travel blogs description  */}
          <div className="m-5 text-left">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel blogs Description{" "}
            </h1>
  
            <textarea
              rows={5}
              name="blogDescription"
              id=""
              placeholder="Write travel blog description"
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

export default BlogsAdded;











