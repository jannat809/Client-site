import { MdAutoDelete } from "react-icons/md";

const StatisticHotelsInfo = ({booked, deleteFunctionHotels,index}) => {

    const {livingCost,hotelImage,hotelName,hotelLocation,date,_id,condition,email}=booked;




    // handleDelete Opearation

    const handelDelete = (_id)=>{


        deleteFunctionHotels(_id)
     }



    return (
        <tr className="font-semibold ">
        <td className="border-2 shadow-xl text-sm  font-semibold">{index+1}</td>
        <td className="border-2 shadow-xl text-sm  font-semibold">{email}</td>

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

        <td className="text-sm  font-semibold border-2 shadow-xl">{hotelName}</td>

        <td className="border-2 shadow-xl text-sm  font-semibold">{hotelLocation}</td>

        <td className="border-2 shadow-xl text-sm  font-semibold">$ {livingCost}</td>

        <td className="border-2 shadow-xl text-sm  font-semibold">{date}</td>


        <th  className=" border-2 shadow-xl text-sm  font-semibold">{condition}</th>

        <th className="border-2 shadow-xl">
           <div className="flex items-center gap-2">
               <button onClick={()=>handelDelete(_id)} className="btn text-[white] bg-[orange] hover:bg-[#326FC5] "><MdAutoDelete></MdAutoDelete></button>
               
            </div> 
          
        </th>
      </tr>
    );
};

export default StatisticHotelsInfo;