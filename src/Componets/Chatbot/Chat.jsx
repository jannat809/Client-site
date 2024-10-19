import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import { Helmet } from "react-helmet-async";
// import axios from 'axios';


// all available props
const theme = {
  background: "#f5f8fb",
  fontFamily: "serif",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "blue",
  userFontColor: "#fff",
};




 const steps = [
  {
    id: '1',
    message: 'Hello , Sir ! Welcome to Travel.com site ! What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hello , {previousValue} Sir . Nice to meet you! Are you facing any problems?',
    trigger: 'problem',
  },
  {
    id: 'problem',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'askPhone' },
      { value: 'no', label: 'No', trigger: 'endMessage' },
    ],
  },
  {
    id: 'askPhone',
    message: 'Please give me your phone number.',
    trigger: 'phone',
  },
  {
    id: 'phone',
    user: true,
    validator: (value) => {
      if (isNaN(value)) {
        return 'value should be a number';
      }
      return true;
    },
    trigger: 'sendMessage',
  },
  {
    id: 'sendMessage',
    message:
      "Our support team will be contact you as soon as possible . Any queries, call us at +8801779198286 , +8801879824775",
    end: true,
  },
  {
    id: 'endMessage',
    message: 'Thank you very much, Sir. Keep in touch!',
    end: true,
  },
];


//  <-------    Handle Payment  ------>
//const handlePayment =()=>{
  
  // axios.post("http://localhost:3000/create-paymet",{
  //    amount:1000,
  //    currency:"USD"
  // })
  // .then((res)=>{
  //   console.log(res);

  //   const redirectUrl = res.data.paymentUrl;

  //   if(redirectUrl){
     
  //      window.location.replace(redirectUrl);

  //   }

  // })


  

//}

const Chat = () => {
  return (
    <div className="flex justify-center my-14 font-serif text-[16px] mx-2 md:mx-0">

     <Helmet>
        <title>Travel | Chatbot</title>
      </Helmet>
    
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>

      {/* <button  className="btn flex justify-center font-bold">Order Now</button> */}
    </div>
  );
};

export default Chat;
