import { MdAutoDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";


const SingleBlog = ({blog , index, deleteFunction}) => {

    const {name,writer,image,date,_id}=blog;

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
                src={image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td className="text-sm  font-semibold border-2 shadow-xl">{name}</td>

        <td className="text-sm  font-semibold border-2 shadow-xl">{writer}</td>

        <td className="text-sm  font-semibold border-2 shadow-xl">{date}</td>

        <th className="text-sm  font-semibold border-2 shadow-xl">
           <div className="flex items-center gap-2">
               <NavLink to={`/dashboard/blogs-updates/${_id}`}><button className="btn text-[white] bg-[orange] hover:bg-[#326FC5]">Update</button></NavLink>
               <button onClick={()=>handelDelete(_id)} className="btn text-[white] bg-[orange] hover:bg-[#326FC5]"><MdAutoDelete></MdAutoDelete></button>
               
            </div> 
          
        </th>
      </tr>
    );
};

export default SingleBlog;