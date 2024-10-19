import { MdAutoDelete } from "react-icons/md";




const SingleUserInfoBooking = ({booked,deleteFunction,index}) => {

    const {placeName,placeImage,price,hotelName,hotelImage,hotelLocation,date,_id,condition}=booked;


     // handleDelete Opearation

     const handelDelete = (_id)=>{


        deleteFunction(_id)
  }

    return (
        <tr className="font-semibold">
        <td className="border-2 shadow-xl font-semibold">{index+1}</td>

        <td className="border-2 shadow-xl">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={placeImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td className="text-sm border-2 shadow-xl font-semibold">{placeName}</td>

        <td className="border-2 text-sm shadow-xl font-semibold">$ {price}</td>


        <td className="border-2 shadow-xl">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={hotelImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td className="text-sm  font-semibold border-2 shadow-xl ">{hotelName}</td>

        <td className="border-2 text-sm shadow-xl font-semibold">{hotelLocation}</td>




        <td className="border-2 text-sm shadow-xl font-semibold">{date}</td>

        <td className="border-2 text-sm shadow-xl font-semibold">{condition}</td>

        <th className="border-2 shadow-xl">
           <div className="flex items-center gap-2">
               <button onClick={()=>handelDelete(_id)} className="btn text-[white] bg-[orange] hover:bg-[#326FC5]"><MdAutoDelete></MdAutoDelete></button>
               
            </div> 
          
        </th>
      </tr>
    );
};

export default SingleUserInfoBooking;