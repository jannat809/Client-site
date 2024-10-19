// import React, { PureComponent } from 'react';
import { useEffect, useState } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';



const PieChartWithCustomizedLabel = () => {


// data load 

// users length find
const [user, setUser] = useState([]);

useEffect(()=>{
  fetch('http://localhost:3000/users')
  .then((res) => res.json())
  .then((data) => setUser(data));
},[])
 


// users lenth end 


 // places length find
 const [place, setPlace] = useState([]);

 useEffect(()=>{
  fetch('http://localhost:3000/guides')
   .then((res) => res.json())
  .then((data) => setPlace(data));
},[])
 

 // places lenth end 


 // hotels length find
 const [hotel, setHotel] = useState([]);

 
 useEffect(()=>{
  fetch('http://localhost:3000/hotels')
   .then((res) => res.json())
  .then((data) => setHotel(data));
},[])
 // hotels lenth end 


 // packages length find
 const [packaged, setPackage] = useState([]);


 useEffect(()=>{
  fetch('http://localhost:3000/packages')
   .then((res) => res.json())
   .then((data) => setPackage(data));
},[])
 
 // packages lenth end 


 // blogs length find
 const [blog, setBlog] = useState([]);

 useEffect(()=>{
  fetch('http://localhost:3000/blogs')
   .then((res) => res.json())
   .then((data) => setBlog(data));
},[])
 

 // blogs lenth end 


 // booking length find
 const [booking, setBooking] = useState([]);

 useEffect(()=>{
  fetch('http://localhost:3000/bookings-packages')
   .then((res) => res.json())
   .then((data) => setBooking(data));
},[])


 const data = [
    {
      name: 'Users',
      uv: user.length,
      pv: 100,
      amt: 200,
    },
    {
      name: 'Tour Guide',
      uv: place.length,
      pv: 100,
      amt: 200,
    },
    {
      name: 'Hotels',
      uv: hotel.length,
      pv: 100,
      amt: 200,
    },
    {
      name: 'Packages',
      uv: packaged.length,
      pv: 100,
      amt: 200,
    },
    {
      name: 'Blogs',
      uv: blog.length,
      pv: 100,
      amt: 200,
    },
    {
      name: 'Bookings',
      uv: booking.length,
      pv: 100,
      amt: 200,
    },
   
  ];
      
      

    return (
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    );
 
};

export default PieChartWithCustomizedLabel;





// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/p/sandbox/simple-composed-chart-lyz572';

//   render() {
//     return (
     
//     );
//   }
// }













// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

//   render() {
//     return (
     
//   }
// }
