import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { Helmet } from "react-helmet-async";
import { useContext, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Login = () => {

  const {logIn , signInGoogle , resetEmail}=useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
    const stay= location?.state?.from?.pathname || '/'
  const emailRef=useRef(null);

  // form control
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    
    console.log(email,password);

    if(password.length <6 ){
      swal("Password must be 6 characters long");
      return;
    }

    logIn(email,password)
     .then(result=>{
        console.log(result.user);
        swal("Welcome", "User login successfully!", "success");
        navigate(stay , {replace:true});
        form.reset();
     })
     .catch(error=>{
      swal('Email or Password does not match')
       console.log(error.message);
       return;
     })

    
  };

  // forgotPassword 
  const forgotPassword=()=>{
      console.log(emailRef.current.value);
    
       const email = emailRef.current.value;

       if(!email){
          swal('Provide a email address');
          return;
       }

       else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
           swal('Provide a valid email address');
           return;
       }

       resetEmail(email)
       .then(()=>{
         
           swal('','Please check your email address','success');
       })
       .catch(error=>{
           console.log(error.message);
           swal('Provide valid email');
       })


  }

  // google sign in 
  const googleSignUp = () => {
    

    signInGoogle()
      .then((result) => {
        console.log(result.user);

        swal("Welcome ", "Registration successful !", "success");
       

        // go to home page
        navigate(stay , {replace:true});
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-5 md:my-12 font-serif md:mx-4">
      <div className="bgImage  rounded-lg  py-10 m-2 xl:m-0">
        <div className=" my-5 md:max-w-sm md:mx-auto mx-2 pb-5 shadow-2xl rounded-lg">
          <div className=" rounded-md p-5 bg-white">
            <Helmet>
              <title>Travel | Login</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
              {/* title */}
              <h1 className=" md:text-[20px] font-bold my-6 px-10">Login</h1>

              <div className="px-10 py-2 md:py-4">
                {/* email*/}
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Email"
                  id=""
                />

                {/* password */}
                <input
                  type="password"
                  name="password"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Password"
                  id=""
                />

                {/* forger password */}
                <div className="flex justify-end my-5">
                  <Link onClick={forgotPassword} className="underline font-semibold ">
                    Forgot password
                  </Link>
                </div>

                {/* button */}
                <button className="btn  w-full font-bold my-2 text-[white] bg-[orange] hover:bg-[#326FC5] border-none">
                  Login
                </button>

                {/* crete account */}
                <h1 className="my-2 text-[10px] md:text-sm flex justify-center font-bold md:font-medium">
                  Don't have an account ?
                  <Link to="/register" className="font-bold ml-1 text-[black]">
                    Register
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
            <div onClick={googleSignUp} className="flex gap-5 border rounded-2xl px-2 py-2 btn bg-white hover:bg-white my-1">
              <FcGoogle className="bg-[white] text-[#3076FF] text-[24px]"></FcGoogle>
              <h1 className="font-bold text-[16px]">Continue with Google</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
