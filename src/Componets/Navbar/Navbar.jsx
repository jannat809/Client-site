import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { useContext} from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import person from "../../../public/person.png";


const Navbar = ({allUser}) => {

 

  const links = (
    <>
      <NavLink to="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/hotels">
        <li>
          <a>Hotels</a>
        </li>
      </NavLink>
      <NavLink to="/packages">
        <li>
          <a>Packages</a>
        </li>
      </NavLink>
      <NavLink to="/blogs">
        <li>
          <a>Blogs</a>
        </li>
      </NavLink>
       <NavLink to="/guides">
        <li>
          <a>Hire Tour Guide</a>
        </li>
      </NavLink>
      
      {/* <NavLink to="/chatbot">
        <li>
          <a>Chatbot</a>
        </li>
      </NavLink> */}
    </>
  );

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        swal("", "Logout Successful", "success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

 
  //  user and admin find
    const CurrentUsers = allUser.find(
      (singleUser) => singleUser?.email === user?.email
    );

    

  return (
    <div className="border-b-2 mb-2 font-serif">
      {/* fixed shadow-xl max-w-7xl rounded-lg */}
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-md font-bold"
            >
              {links}
            </ul>
          </div>

          <img className="w-1/4  hidden md:block " src={logo} alt="" />
          <NavLink to="/" className="md:text-base font-bold flex">
            <h1 className="md:text-2xl text-[orange] font-extrabold">Travel</h1>
            <h1 className="md:text-2xl text-[#326fc5] font-extrabold animate-bounce hover:animate-none">
              .com
            </h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex text-xl">
          <ul className="menu menu-horizontal px-1 text-base font-bold ">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar animate-pulse hover:animate-none"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={person} />
              </div>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold border-4"
            >
              {user ? (
                <NavLink>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <li>
                    <a>Login</a>
                  </li>
                </NavLink>
              )}

              
                      
              <NavLink>
                         {
                           CurrentUsers?.role === 'admin' 
                           ? 
                           <NavLink to="/dashboard/statistics">
                              <li>
                                 <a>Dashboard </a>
                               </li>
                           </NavLink>
                           : 
                           <div>
                                <NavLink to="/chatbot">
                                 <li>
                                   <a>Chatbot Support</a>
                                 </li>
                                </NavLink>

                                <NavLink to="/dashboard/user-statistics">
                                 <li>
                                   <a>User Dashboard </a>
                                 </li>
                                </NavLink>
                           </div>
                         }
              </NavLink>

                        

              <NavLink to="" className="font-medium text-[#159bc8] ">
                <li>
                  <a>{user?.email}</a>
                </li>
              </NavLink>
            </div>
          </div>

          {user ?  (
            <NavLink
              to="/login"
              className="btn bg-[orange] hover:bg-[#326FC5] rounded-full font-bold  text-white text-[14px] md:w-36"
            >
              Login
            </NavLink>
          )
          :
          (
            <NavLink
              to="/register"
              className="btn bg-[orange] rounded-full  font-bold  text-white text-[14px] hover:bg-[#326FC5] md:w-36"
            >
              Register
            </NavLink>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
