import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
  
      <div className="mt-2 mb-4 font-serif mx-2 md:px-4  xl:mx-0">
      <footer className="footer bg-base-200 rounded-t-2xl mb-1 text-base-content p-10">
        <nav className="font-semibold">
          <h6 className="footer-title">Services</h6>
          <a href="http://localhost:5173/blogs" className="link link-hover">Travel Blogs</a>
          <a  href="http://localhost:5173/places" className="link link-hover">Visiting Places</a>
          <a href="http://localhost:5173/hotels"  className="link link-hover">Popular Hotels</a>
          <a  href="http://localhost:5173/packages" className="link link-hover">Attractive Packages</a>
        </nav>
        <nav className="font-semibold">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="font-semibold">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          {/* <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg> */}
          <NavLink to="/Blogs" className='grid '>
            <div className="text-3xl font-bold text-[#FFA500]">
              Travel<span className="text-[#326FC5] ">.com</span>
            </div>
            <br />
            <span className="font-semibold">
              Providing reliable and enjoyable tour plan since 2024.
            </span>
          </NavLink>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-cols-1 gap-4">
            <h1 className="textl-lg font-bold text-[#FFA500]">Developed By</h1>
            <div className="grid grid-flow-col">
            
              <a href="https://www.linkedin.com/in/md-nadim-mir-6665252a4/"  className="animate-bounce hover:animate-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
              </a>


              <a href="https://github.com/Md-Nadim-Mir" className="animate-bounce hover:animate-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                </svg>
              </a>

                

              <a href="https://www.facebook.com/mdnadim.mir.96" className="animate-bounce hover:animate-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>

              <a
                href="https://www.behance.net/kulsumakter934"
                className="animate-bounce hover:animate-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="#399bdf"
                    d="M30.261,43.694c2.228-0.341,4.516-0.741,6.651-1.481c1.643-0.57,3.221-1.459,4.131-2.978 c0.043-0.057,0.092-0.105,0.133-0.165c1.022-1.494,1.334-3.36,1.505-5.124c0.224-2.313,0.299-4.648,0.298-6.971 c-0.002-4.563-0.413-9.118-1.164-13.618c-0.011-0.152-0.018-0.304-0.03-0.456c-0.054-0.661-0.147-1.343-0.387-1.964 c-0.003-0.014-0.005-0.028-0.007-0.042c-0.006-0.031-0.022-0.05-0.032-0.077c-0.006-0.013-0.011-0.026-0.017-0.039 c-0.017-0.035-0.032-0.071-0.055-0.098c-0.084-0.177-0.174-0.353-0.292-0.514c-0.623-0.854-1.629-1.186-2.628-1.368 c-1.189-0.216-2.396-0.36-3.601-0.453c-0.36-0.028-0.721-0.038-1.082-0.056c-1.572-0.138-3.149-0.221-4.725-0.252 c-5.325-0.108-10.653,0.292-15.957,0.723c-2.123,0.173-4.206,0.584-5.494,2.446c-0.38,0.55-0.637,1.146-0.819,1.766 c-0.729,1.332-1.315,4.534-1.326,4.654c-0.231,2.66,0.081,14.279,0.4,16.421c0.293,1.973,0.647,4.062,1.482,5.889 c0.764,1.67,2.109,2.77,3.845,3.326c1.888,0.605,3.972,0.753,5.938,0.913C21.439,44.533,25.886,44.364,30.261,43.694z"
                  ></path>
                  <path
                    fill="#231f20"
                    d="M9.951,14.884c0.198-1.015,0.818-1.9,1.673-2.477c0.989-0.666,2.174-0.92,3.353-0.917 c0.644,0.001,0.644-0.999,0-1c-1.369-0.003-2.79,0.308-3.927,1.102c-1.027,0.717-1.821,1.783-2.063,3.026 C8.864,15.247,9.828,15.516,9.951,14.884L9.951,14.884z"
                  ></path>
                  <path
                    fill="#231f20"
                    d="M34.727,40.103c2.641-1.003,4.72-3.209,5.528-5.922c0.184-0.618-0.781-0.882-0.964-0.266 c-0.702,2.357-2.525,4.349-4.829,5.224c-0.252,0.096-0.426,0.337-0.349,0.615C34.179,39.996,34.474,40.199,34.727,40.103 L34.727,40.103z"
                  ></path>
                  <path
                    fill="#df4bb1"
                    d="M2.511,9.952c0.798,0.063,1.596,0.126,2.394,0.189c0.243,0.019,0.54-0.125,0.707-0.293 C5.785,9.675,5.916,9.39,5.905,9.141C5.893,8.882,5.808,8.614,5.612,8.434c-0.204-0.187-0.43-0.271-0.707-0.293 C4.107,8.078,3.309,8.015,2.511,7.952c-0.243-0.019-0.54,0.125-0.707,0.293C1.631,8.418,1.5,8.703,1.511,8.952 c0.012,0.259,0.097,0.527,0.293,0.707C2.008,9.847,2.234,9.93,2.511,9.952L2.511,9.952z"
                  ></path>
                  <path
                    fill="#df4bb1"
                    d="M5.035,4.904C5.99,5.768,6.945,6.632,7.901,7.496c0.196,0.178,0.437,0.293,0.707,0.293 c0.245,0,0.538-0.109,0.707-0.293c0.351-0.383,0.414-1.039,0-1.414C8.36,5.218,7.404,4.354,6.449,3.49 C6.253,3.312,6.012,3.197,5.742,3.197c-0.245,0-0.538,0.109-0.707,0.293C4.683,3.872,4.62,4.529,5.035,4.904L5.035,4.904z"
                  ></path>
                  <path
                    fill="#df4bb1"
                    d="M12.188,6.593c0.239-0.435,0.51-0.85,0.813-1.244c-0.052,0.067-0.104,0.135-0.156,0.202 c0.489-0.627,1.052-1.19,1.681-1.676c-0.067,0.052-0.135,0.104-0.202,0.156c0.026-0.02,0.053-0.04,0.079-0.06 c0.216-0.164,0.385-0.325,0.46-0.598c0.066-0.239,0.036-0.558-0.101-0.771c-0.138-0.214-0.343-0.401-0.598-0.46 c-0.244-0.056-0.561-0.058-0.771,0.101c-1.197,0.905-2.208,2.017-2.932,3.338c-0.251,0.459-0.128,1.111,0.359,1.368 C11.288,7.199,11.919,7.083,12.188,6.593L12.188,6.593z"
                  ></path>
                  <path
                    fill="#99c93c"
                    d="M37.453,44.213c-0.153,0.64-0.306,1.28-0.459,1.92c-0.062,0.258-0.035,0.539,0.101,0.771 c0.121,0.207,0.359,0.405,0.598,0.46c0.256,0.058,0.543,0.046,0.771-0.101c0.215-0.139,0.399-0.342,0.46-0.598 c0.153-0.64,0.306-1.28,0.459-1.92c0.062-0.258,0.035-0.539-0.101-0.771c-0.121-0.207-0.359-0.405-0.598-0.46 c-0.256-0.058-0.543-0.046-0.771,0.101C37.697,43.754,37.514,43.958,37.453,44.213L37.453,44.213z"
                  ></path>
                  <path
                    fill="#99c93c"
                    d="M41.444,42.982c1.189,1.365,2.55,2.564,4.032,3.602c0.43,0.301,1.13,0.092,1.368-0.359 c0.271-0.512,0.1-1.047-0.359-1.368c-0.176-0.123-0.351-0.249-0.524-0.378c-0.081-0.061-0.16-0.127-0.244-0.184 c0.089,0.061,0.122,0.095,0.015,0.01c-0.036-0.028-0.071-0.056-0.107-0.084c-0.337-0.268-0.665-0.547-0.985-0.835 c-0.631-0.569-1.226-1.177-1.784-1.818c-0.345-0.396-1.066-0.379-1.414,0C41.057,41.99,41.076,42.56,41.444,42.982L41.444,42.982z"
                  ></path>
                  <path
                    fill="#99c93c"
                    d="M43.877,39.582c1.339,0.299,2.686,0.558,4.04,0.777c0.274,0.044,0.522,0.044,0.771-0.101 c0.207-0.121,0.405-0.359,0.46-0.598c0.11-0.481-0.146-1.141-0.698-1.23c-1.354-0.219-2.701-0.478-4.04-0.777 c-0.509-0.114-1.106,0.154-1.23,0.698C43.063,38.859,43.331,39.46,43.877,39.582L43.877,39.582z"
                  ></path>
                  <path
                    fill="#99c93c"
                    d="M45.285,35.476c0.606-0.16,1.213-0.32,1.819-0.48c0.242-0.064,0.472-0.245,0.598-0.46 c0.125-0.214,0.179-0.53,0.101-0.771c-0.078-0.242-0.228-0.475-0.46-0.598c-0.24-0.127-0.504-0.171-0.771-0.101 c-0.606,0.16-1.213,0.32-1.819,0.48c-0.242,0.064-0.472,0.245-0.598,0.46c-0.125,0.214-0.179,0.53-0.101,0.771 c0.078,0.242,0.228,0.475,0.46,0.598C44.754,35.501,45.018,35.546,45.285,35.476L45.285,35.476z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.83,19.683c0.411,3.976,0.541,7.974,0.39,11.969c-0.031,0.81,0.711,1.5,1.5,1.5 c0.838,0,1.469-0.687,1.5-1.5c0.151-3.995,0.02-7.993-0.39-11.969c-0.083-0.806-0.63-1.5-1.5-1.5 C11.584,18.183,10.747,18.872,10.83,19.683L10.83,19.683z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.841,21.063c1.401-0.193,3.152-0.242,4.688-0.149c0.424,0.026,0.848,0.063,1.27,0.11 c-0.01-0.001,0.52,0.07,0.284,0.034c0.187,0.029,0.372,0.062,0.556,0.107c0.057,0.014,0.49,0.157,0.326,0.084 c0.121,0.054,0.243,0.127,0.351,0.203c-0.289-0.205,0.166,0.247,0.06,0.081c-0.064-0.08-0.055-0.056,0.028,0.071 c-0.062-0.156-0.067-0.148-0.014,0.023c-0.021-0.172-0.029-0.169-0.024,0.009c0.005-0.043,0.011-0.085,0.016-0.128 c-0.02,0.09-0.046,0.179-0.079,0.265c0.057-0.145,0.046-0.138-0.035,0.019c-0.214,0.225,0.134-0.095-0.118,0.14 c-0.127,0.112-0.139,0.127-0.035,0.045c-0.044,0.029-0.088,0.058-0.131,0.087c-0.393,0.218-0.354,0.208-0.805,0.335 c-0.371,0.105-0.751,0.179-1.13,0.25c-0.789,0.148-1.342,0.225-2.101,0.295c-0.9,0.083-1.761,0.123-2.571,0.571 c-0.687,0.38-0.97,1.382-0.538,2.052c0.449,0.696,1.317,0.945,2.052,0.538c0.008-0.005,0.222-0.099,0.09-0.051 c-0.136,0.049,0.101-0.018,0.104-0.018c0.268-0.058-0.075-0.012,0.201-0.036c0.37-0.033,0.741-0.06,1.111-0.1 c0.85-0.092,1.699-0.213,2.539-0.374c1.517-0.29,2.997-0.811,3.884-2.16c0.998-1.517,0.527-3.379-0.88-4.424 c-1.21-0.899-2.963-0.941-4.41-1.029c-1.84-0.113-3.663,0.004-5.486,0.256c-0.78,0.108-1.274,1.145-1.048,1.845 C11.274,20.872,12.005,21.179,12.841,21.063L12.841,21.063z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.783,25.977c0.661-0.04,1.323-0.039,1.984,0.013c0.147,0.011,0.293,0.025,0.44,0.041 c0.073,0.008,0.146,0.016,0.219,0.026c-0.066-0.008-0.263-0.042,0.039,0.008c0.289,0.048,0.577,0.099,0.862,0.166 c0.264,0.062,0.527,0.134,0.783,0.223c0.059,0.02,0.117,0.046,0.177,0.064c0.212,0.065-0.209-0.108-0.011-0.007 c0.13,0.066,0.263,0.126,0.39,0.199c0.109,0.062,0.214,0.131,0.319,0.2c0.233,0.153,0.042,0.034-0.002-0.005 c0.048,0.043,0.096,0.084,0.143,0.127c0.087,0.081,0.163,0.174,0.25,0.256c0.131,0.123-0.078-0.086-0.061-0.087 c0.024-0.001,0.136,0.202,0.156,0.234c0.059,0.097,0.105,0.201,0.163,0.299c0.088,0.15-0.035-0.094-0.038-0.097 c0.033,0.042,0.062,0.175,0.075,0.216c0.034,0.109,0.058,0.22,0.084,0.331c0.011,0.046,0.016,0.221,0.007,0.025 c-0.009-0.216-0.005,0.041-0.004,0.082c0.002,0.074-0.008,0.151-0.003,0.224c0.012,0.165,0.002-0.104,0.025-0.122 c-0.036,0.027-0.062,0.273-0.075,0.325c-0.064,0.256,0.123-0.181-0.027,0.064c-0.041,0.067-0.089,0.138-0.128,0.207 c0.06-0.107,0.125-0.139,0.009-0.023c-0.085,0.085-0.171,0.166-0.259,0.247c0.212-0.196-0.031,0.015-0.133,0.077 c-0.101,0.062-0.205,0.118-0.311,0.171c-0.053,0.026-0.106,0.051-0.159,0.076c0.194-0.09,0.018-0.01-0.085,0.027 c-0.255,0.091-0.515,0.165-0.779,0.226c-0.153,0.036-0.308,0.067-0.463,0.094c-0.067,0.012-0.133,0.023-0.2,0.033 c-0.03,0.005-0.311,0.045-0.136,0.022c0.175-0.023-0.049,0.005-0.07,0.007c-0.113,0.012-0.225,0.025-0.338,0.037 c-0.158,0.016-0.317,0.031-0.475,0.046c-0.34,0.032-0.68,0.062-1.019,0.1c-0.787,0.089-1.573,0.197-2.334,0.427 c-0.75,0.227-1.301,1.061-1.048,1.845c0.245,0.758,1.041,1.291,1.845,1.048c0.326-0.099,0.656-0.178,0.991-0.239 c0.156-0.028,0.313-0.053,0.47-0.075c-0.289,0.041-0.051,0.008,0.007,0.002c0.113-0.012,0.226-0.025,0.339-0.037 c0.789-0.081,1.578-0.144,2.363-0.26c1.44-0.211,3.006-0.709,3.992-1.842c1.146-1.317,1.229-3.071,0.534-4.622 c-0.636-1.42-1.955-2.318-3.386-2.814c-1.607-0.557-3.437-0.684-5.124-0.583c-0.782,0.047-1.538,0.656-1.5,1.5 C12.318,25.249,12.945,26.027,13.783,25.977L13.783,25.977z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M25.566,28.605c2.642,0.133,5.287,0.216,7.932,0.248c0.798,0.01,1.517-0.695,1.5-1.5 c-0.025-1.163-0.124-2.315-0.595-3.39c-0.413-0.941-1.15-1.708-2.032-2.227c-1.77-1.042-4.506-1.4-6.303-0.244 c-1.814,1.167-2.418,3.498-2.25,5.545c0.178,2.154,1.097,4.21,2.904,5.474c1.802,1.26,4.487,1.45,6.315,0.142 c0.637-0.455,1.005-1.328,0.538-2.052c-0.407-0.631-1.37-1.026-2.052-0.538c-0.14,0.1-0.284,0.183-0.431,0.272 c-0.054,0.033-0.261,0.116,0.014,0.007c-0.059,0.023-0.118,0.044-0.178,0.064c-0.161,0.054-0.326,0.08-0.488,0.127 c-0.164,0.047,0.06-0.005,0.086-0.007c-0.127,0.01-0.253,0.021-0.381,0.023c-0.15,0.002-0.298-0.015-0.447-0.018 c-0.226-0.004,0.236,0.057,0.016,0.002c-0.062-0.016-0.127-0.024-0.19-0.037c-0.169-0.038-0.332-0.091-0.498-0.14 c-0.265-0.079-0.064-0.016-0.004,0.01c-0.099-0.042-0.196-0.091-0.291-0.141c-0.134-0.071-0.26-0.151-0.389-0.231 c-0.233-0.145-0.059-0.035-0.008,0.006c-0.067-0.054-0.132-0.11-0.195-0.168c-0.136-0.124-0.26-0.258-0.383-0.394 c-0.009-0.01-0.153-0.184-0.055-0.06c0.109,0.138-0.104-0.152-0.123-0.18c-0.1-0.152-0.192-0.31-0.277-0.471 c-0.042-0.081-0.079-0.165-0.121-0.246c0.012,0.024,0.077,0.205,0.016,0.042c-0.138-0.369-0.252-0.741-0.327-1.127 c-0.013-0.068-0.022-0.137-0.036-0.205c-0.049-0.234,0.01,0.224-0.001-0.015c-0.008-0.162-0.028-0.323-0.033-0.486 c-0.006-0.185-0.005-0.371,0.003-0.556c0.004-0.092,0.01-0.185,0.017-0.277c0.003-0.039,0.055-0.402,0.02-0.204 c-0.027,0.151,0.056-0.262,0.073-0.332c0.043-0.176,0.099-0.346,0.154-0.518c0.021-0.066,0.126-0.238,0.003-0.013 c0.043-0.078,0.078-0.158,0.122-0.236c0.052-0.092,0.334-0.427,0.143-0.232c0.06-0.061,0.124-0.125,0.182-0.188 c0.051-0.055,0.214-0.138,0.005-0.013c0.085-0.051,0.165-0.103,0.251-0.152c0.009-0.005,0.223-0.094,0.087-0.044 c-0.155,0.057,0.133-0.034,0.166-0.043c0.095-0.026,0.19-0.047,0.287-0.065c0.175-0.034-0.001,0-0.032,0.002 c0.149-0.013,0.298-0.02,0.447-0.021c0.174-0.001,0.347,0.008,0.52,0.023c0.041,0.003,0.335,0.04,0.14,0.012 c-0.177-0.026,0.045,0.009,0.066,0.014c0.177,0.036,0.353,0.071,0.527,0.119c0.087,0.024,0.173,0.049,0.259,0.077 c0.033,0.011,0.375,0.132,0.199,0.065c-0.154-0.059,0.049,0.022,0.067,0.031c0.119,0.059,0.238,0.119,0.352,0.187 c0.057,0.034,0.113,0.069,0.168,0.105c0.1,0.066,0.224,0.177,0.066,0.038c0.149,0.131,0.283,0.27,0.417,0.415 c0.143,0.154-0.082-0.181,0.002,0.013c0.046,0.107,0.124,0.21,0.181,0.313c0.022,0.041,0.1,0.261,0.022,0.045 c0.041,0.115,0.077,0.232,0.109,0.35c0.019,0.071,0.037,0.143,0.053,0.215c0.003,0.013,0.085,0.477,0.045,0.188 c0.062,0.444,0.068,0.898,0.078,1.345c0.5-0.5,1-1,1.5-1.5c-2.645-0.032-5.29-0.114-7.932-0.248c-0.785-0.04-1.535,0.718-1.5,1.5 C24.104,27.951,24.725,28.562,25.566,28.605L25.566,28.605z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M25.852,19.807c2.106,0.041,4.212,0.082,6.319,0.123c0.785,0.015,1.536-0.701,1.5-1.5 c-0.037-0.826-0.659-1.484-1.5-1.5c-2.106-0.041-4.212-0.082-6.319-0.123c-0.785-0.015-1.536,0.701-1.5,1.5 C24.389,19.133,25.011,19.791,25.852,19.807L25.852,19.807z"
                  ></path>
                </svg>

                {/* <AiFillBehanceCircle className="text-[orange] bg-[black] p-2 rounded-full" /> */}
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
    
  );
};

export default Footer;