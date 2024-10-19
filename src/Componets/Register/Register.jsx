import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import "./Register.css";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import { ImSpinner9 } from "react-icons/im";
// import Swal from "sweetalert2";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  // loading,
  const { createUser,  signInGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  // form control
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6 || confirmPassword.length < 6) {
      swal("Password length must be 6 character");
      // Swal.fire("Password length must be 6 character");
      return;
    }

    if (password !== confirmPassword) {
      swal("Password doesn't match!");
      // Swal.fire("Password doesn't match!");
      return;
    }

    const name = firstName+ ' ' + lastName;

    // backend data set
    const users = { displayName: name, email: email, role: "user" };

    console.log(users.displayName, users.email, users.role);

    // backend end

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // user data post backend
        fetch('http://localhost:3000/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

            // email verify
        sendEmailVerification(result.user).then(() => {
          // swal("Registration successful ! Please verify your email .");
          swal(
            "Welcome",
            "Registration successful ! Please verify your email .",
            "success"
          );
          navigate("/");
          form.reset();
        });
             
        })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // googleSignUp

  const googleSignUp = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);

        // backend start
        
        const users = { displayName:result.user.displayName, email: result.user.email, role: "user" };

        console.log(users.displayName, users.email, users.role);

        // backend end

        // user data post backend
        fetch('http://localhost:3000/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

        swal("Welcome", "Registration successful !", "success");

        // go to home page
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-5 md:my-12 font-serif md:mx-4">
      <div className="bgImage  rounded-lg  py-10 m-2 xl:m-0">
        <div className=" m-5 md:max-w-sm md:mx-auto mx-2 pb-5 shadow-2xl rounded-lg">
          <div className=" rounded-md p-5 bg-white">
            <Helmet>
              <title>Travel | Register</title>
            </Helmet>

            <form onSubmit={handleSubmit}>
              {/* title */}
              <h1 className=" md:text-[20px] font-bold my-6 px-10">
                Create an account
              </h1>

              <div className="px-10 py-2 md:py-4">
                {/* first name */}
                <input
                  type="text"
                  name="firstName"
                  className=" border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="First Name"
                  required
                />

                {/* last name */}
                <input
                  type="text"
                  name="lastName"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Last Name"
                  required
                />

                {/* email*/}
                <input
                  type="email"
                  name="email"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Email"
                  required
                />

                {/* password */}
                <input
                  type="password"
                  name="password"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Password"
                  required
                />
                {/* Confirm Password */}
                <input
                  type="password"
                  name="confirmPassword"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Confirm Password"
                  required
                />

                {/* button */}

                {/* <div className="flex justify-center mt-12">
                  {loading ? (
                    <button className="btn">
                      <ImSpinner9 className="animate-spin mx-atuo text-xl text-[#ba3d3d]"></ImSpinner9>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn text-[white] font-bold bg-[green] hover:bg-[red]  text-[18px]"
                    >
                      Register
                    </button>
                  )} */}
                {/* </div> */}

                <button className="btn  w-full font-bold my-2 text-[white] bg-[orange] hover:bg-[#326FC5] border-none">
                  Create an account
                </button>

                {/* Already have an account? Login */}
                <h1 className="my-2 text-[10px] md:text-sm flex justify-center font-bold md:font-medium">
                  Already have an account ?
                  <Link to="/login" className="font-bold ml-1 text-[black]">
                    Login
                  </Link>
                </h1>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-center px-5">
            {/* or */}
            <h1 className="divider my-5 font-bold text-base text-center">Or</h1>

            {/* connect facebook */}
            {/* <div className="flex gap-5 border rounded-2xl px-2 py-2 btn bg-white hover:bg-white my-1">
              <FaFacebook className="bg-[white] text-[#3076FF] text-[24px]"></FaFacebook>
              <h1 className="font-medium text-[16px]">
                Continue with Facebook
              </h1>
            </div> */}

            {/* connect google */}
            <div
              onClick={googleSignUp}
              className="flex gap-5 border rounded-2xl px-2 py-2 btn bg-white hover:bg-white my-1"
            >
              <FcGoogle className="bg-[white] text-[#3076FF] text-[24px]"></FcGoogle>
              <h1 className="font-bold text-[16px]">Continue with Google</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
