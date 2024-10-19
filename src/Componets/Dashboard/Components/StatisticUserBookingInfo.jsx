import { MdAutoDelete } from "react-icons/md";

const StatisticUserBookingInfo = ({booked,deleteFunction,index}) => {

    const {placeName,price,hotelName,hotelLocation,date,_id,condition,email}=booked;


    //  booking Condition change start 

  // const [selectedCondition, setSelectedCondition] = useState(condition);

  // const handleChange = (event) => {
  //   setSelectedCondition(event.target.value);
  // };

  //  booking condition chane end 


  // <------------- update opearations ------------------>
  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   const condition = (e.target.options.value)
  //   // const newRole = (e.target.userRole.value)
   
  //   const updateInfo = {placeName,placeImage,price,hotelName,hotelImage,hotelLocation,date,_id,condition};

  //   updateFunction(_id,updateInfo)


  // };

    // handleDelete Opearation

    const handelDelete = (_id)=>{


       deleteFunction(_id)
     }



    return (
        <tr className="font-semibold ">
        <td className="border-2 shadow-xl text-sm  font-semibold">{index+1}</td>
        <td className="border-2 shadow-xl text-sm  font-semibold">{email}</td>

        {/* <td className="border-2 shadow-xl">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={placeImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td> */}

        <td className="text-sm  font-semibold border-2 shadow-xl">{placeName}</td>

        


        {/* <td className="border-2 shadow-xl">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={hotelImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td> */}

        <td className="text-sm  font-semibold border-2 shadow-xl">{hotelName}</td>


        <td className="border-2 shadow-xl text-sm  font-semibold">$ {price}</td>

        <td className="border-2 shadow-xl text-sm  font-semibold">{hotelLocation}</td>




        <td className="border-2 shadow-xl text-sm  font-semibold">{date}</td>

        {/* <th>
          <div className="flex">
            <form onSubmit={handleUpdate}>
              <select
                className=" rounded text-sm  font-semibold"
                id="options"
                value={selectedCondition}
                name="userRole"
                onChange={handleChange}
              >
                 <option value="pending">pending</option>
                 <option value="approved">approved</option>
              </select>

              <button className=" ml-5" type="submit">
                <FaCheckCircle className="text-[#eaea42] text-2xl bg-none m-1" />
              </button>
            </form>
          </div>
        </th> */}

        <th  className=" border-2 shadow-xl text-sm  font-semibold">{condition}</th>

        <th className="border-2 shadow-xl">
           <div className="flex items-center gap-2">
               <button onClick={()=>handelDelete(_id)} className="btn text-[white] bg-[orange] hover:bg-[#326FC5] "><MdAutoDelete></MdAutoDelete></button>
               
            </div> 
          
        </th>
      </tr>
    );
};

export default StatisticUserBookingInfo;