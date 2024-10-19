import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

import errorImage from '../../../public/404.gif'

const ErrorPage = () => {

    const navigate =useNavigate();

    return (
        <section className='bg-white '>
            <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
                <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
                    {/* <p className='p-3 text-sm font-medium text-rose-500 rounded-full bg-blue-50 '>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                            />
                        </svg>
                    </p> */}
                    <img src={errorImage} alt="" />
                    <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
                        Something Went Wrong!
                    </h1>
                    <p className='mt-4 text-gray-500 '>Here are some helpful links:</p>

                    <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
                        <button className="btn py-3 font-bold" onClick={() => navigate(-1)}>

                            <FaLongArrowAltLeft></FaLongArrowAltLeft>Go back

                        </button>

                       <NavLink to='/'> <button className="btn bg-[#059C5C] text-white hover:bg-[#0ea0a5] font-medium">Take Me Home</button></NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;