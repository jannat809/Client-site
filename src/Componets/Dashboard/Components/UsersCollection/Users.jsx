import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";
import swal from "sweetalert";
import { useState } from "react";

const Users = () => {
  const usersCollection = useLoaderData();
  const loadUsers = usersCollection.filter((user) => user.role === "user");
  const [users, setUsers] = useState(loadUsers);



  // <------------ delete function ------------->
  const deleteFunction = (_id) => {
    console.log(_id);
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          swal("", "User deleted Successfully !", "success");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  //  <--------------  update function ------------------->

  const updateFunction = (_id,updateInfo)=>{
      console.log(_id,updateInfo);

      fetch(`http://localhost:3000/users/${_id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(updateInfo)
      })
      .then(res=>res.json())
      .then((data)=>{
           console.log(data);

           if(data.modifiedCount > 0){
            
              const remainingUser = users.filter(user=>user._id !== _id);
              setUsers(remainingUser);

              swal('','User role updated successfully','success')

           }
      })
  }

  return (
    <div className="font-serif">
      {users.length >= 1 ? (
        <h1 className="text-center pt-5 font-bold text-xl md:text-3xl text-[orange]">
          Number Of Users </h1>
      ) : (
        <h1 className="text-center pt-5 font-bold text-xl md:text-3xl text-[orange]">
          No Users Found
        </h1>
      )}

      {/*  user data show in table format */}

      {users.length >= 1 ? (
        <div className="overflow-x-auto border-4 border-[#326FC5] rounded mx-2 my-5 mt-16">
          <table className="table">
            {/* head */}
            <thead className=" border-4 shadow-2xl text-base font-extrabold text-black">
              <tr>
                <th className="border-4  shadow-xl">No</th>
                <th className="border-4  shadow-xl">Name</th>
                <th className="border-4  shadow-xl">Email</th>
                <th className="border-4  shadow-xl">Role</th>
                <th className="border-4  shadow-xl">Delete</th>
              </tr>
            </thead>

            {users.map((user, index) => (
              <SingleUser
                index={index}
                key={user._id}
                user={user}
                deleteFunction={deleteFunction}
                updateFunction={updateFunction}
              ></SingleUser>
            ))}
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Users;
