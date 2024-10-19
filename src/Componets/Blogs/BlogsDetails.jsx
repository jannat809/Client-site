import { useLoaderData } from "react-router-dom";


const BlogsDetails = () => {
    const loadHotel = useLoaderData();

  const { name, image, writer, description, date } = loadHotel;

  const str = description;
  const parts = str.split("#");

    return (
        <div className="pb-10 font-serif md:px-4">
       
  
        <img src={image} className="w-full h-[60vh] rounded-2xl px-2 md:px-0" alt="" />

        {/* <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2">
          {name}
        </h1> */}
       
  
        <h1 className="mx-2 mt-12 mb-4 text-lg md:text-2xl  font-bold text-[#FFA500]">History of {name}</h1>
  
  
       {
          parts.map((part,index)=><li key={index} className="mx-2 mb-4  font-medium px-5">{part}</li>)
       }

       
       <h1 className="mx-2 mt-10 mb-2  text-xl  font-extrabold text-[#FFA500]">Author:</h1>
       <h1 className="mx-2 mb-2  font-medium">{writer}</h1>
       <h1 className="mx-2 mb-4  font-normal">Date : {date}</h1>
  
      </div>
    );
};

export default BlogsDetails;