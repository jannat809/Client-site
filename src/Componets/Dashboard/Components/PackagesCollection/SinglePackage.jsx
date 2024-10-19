import { MdAutoDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";


const SinglePackage = ({packaged,deleteFunction,index}) => {

    const {placeName,placeImage,price,hotelName,hotelImage,hotelLocation,postedDate,_id}=packaged;


    // handleDelete Opearation

    const handelDelete = (_id)=>{


        deleteFunction(_id)
  }

    return (
        <tr className="font-semibold">
        <td className="border-2 shadow-xl text-sm  font-semibold">{index+1}</td>

        <td className="border-2 shadow-xl text-sm  font-semibold">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={placeImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td className="text-sm  font-semibold border-2 shadow-xl">{placeName}</td>

        <td className="text-sm  font-semibold border-2 shadow-xl">$ {price}</td>


        <td className="text-sm  font-semibold border-2 shadow-xl">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={hotelImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td className="text-sm  font-semibold border-2 shadow-xl">{hotelName}</td>

        <td className="text-sm  font-semibold border-2 shadow-xl">{hotelLocation}</td>




        <td className="text-sm  font-semibold border-2 shadow-xl">{postedDate}</td>

        <th className="text-sm  font-semibold border-2 shadow-xl">
           <div className="flex items-center gap-2">
               <NavLink to={`/dashboard/packages-updates/${_id}`}><button className="btn text-[white] bg-[orange] hover:bg-[#326FC5]">Update</button></NavLink>
               <button onClick={()=>handelDelete(_id)} className="btn text-[white] bg-[orange] hover:bg-[#326FC5]"><MdAutoDelete></MdAutoDelete></button>
               
            </div> 
          
        </th>
      </tr>
    );
};

export default SinglePackage;