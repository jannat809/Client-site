import {  useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
// import { NavLink } from "react-router-dom";

const SingleUser = ({ user, index, deleteFunction , updateFunction }) => {
  const { displayName, email, role, _id } = user;


  //  user role change start 

  const [selectedRole, setSelectedRole] = useState(role);

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  //  user role chane end 

  // <------------- update opearations ------------------>
  const handleUpdate = (e) => {
    e.preventDefault();
    const role = (e.target.options.value)
    // const newRole = (e.target.userRole.value)
   
    const updateInfo = {role};

    updateFunction(_id,updateInfo)


  };

  //  <--------- delete opearation -------------->
  const handleDelete = (_id) => {
    console.log(_id);
    deleteFunction(_id);
  };

  return (
    <tbody className="font-semibold">
      {/* row 1 */}
      <tr>
        <td className="border-2 shadow-xl text-sm  font-semibold"> {index + 1}</td>

        <td className="text-sm  font-semibold border-2 shadow-xl">
            {displayName}
        </td>

        <td className="text-sm  font-semibold border-2 shadow-xl">
           {email}
        </td>
        <th className="text-sm  font-semibold border-2 shadow-xl">
          <div >
            <form className="flex  items-center" onSubmit={handleUpdate}>
              <select
                className="font-extrabold rounded"
                id="options"
                value={selectedRole}
                name="userRole"
                onChange={handleChange}
              >
                 <option value="user">User</option>
                 <option value="admin">Admin</option>
              </select>

              <button className=" ml-5" type="submit">
                <FaCheckCircle className="text-[orange] hover:text-[#326FC5] text-2xl bg-none m-1" />
              </button>

            </form>
          </div>
        </th>

        <th className="text-sm  font-semibold border-2 shadow-xl">
          <button
            onClick={() => handleDelete(_id)}
            className="btn text-[white] bg-[orange] hover:bg-[#326FC5]"
          >
            <MdAutoDelete></MdAutoDelete>
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default SingleUser;

























   