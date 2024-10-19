import { MdAutoDelete } from "react-icons/md";




const SingleGuideBooking = ({booked,deleteFunctionGuides,index}) => {

    const {name,image,experiences, cost, date,_id,transaction}=booked;
    console.log(booked)


     // handleDelete Opearation

     const handelDeleteGuides = (_id)=>{


      deleteFunctionGuides(_id)
  }

    return (
        <tr className="font-semibold">
        <td className="border-2 shadow-xl font-semibold">{index+1}</td>

        
        <td className="border-2 shadow-xl">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td className="text-sm  font-semibold border-2 shadow-xl ">{name}</td>

        <td className="border-2 text-sm shadow-xl font-semibold">{experiences} years</td>

        <td className="border-2 text-sm shadow-xl font-semibold">${cost}</td>




        <td className="border-2 text-sm shadow-xl font-semibold">{date}</td>

        <td className="border-2 text-sm shadow-xl font-semibold">{transaction}</td>

        <th className="border-2 shadow-xl">
           <div className="flex items-center gap-2">
               <button onClick={()=>handelDeleteGuides(_id)} className="btn text-[white] bg-[orange] hover:bg-[#326FC5]"><MdAutoDelete></MdAutoDelete></button>
               
            </div> 
          
        </th>
      </tr>
    );
};

export default SingleGuideBooking;