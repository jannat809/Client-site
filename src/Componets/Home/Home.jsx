import { Helmet } from "react-helmet-async";
import Banner from "./Banner";





import Feedback from "../Review/Feedback";
import Hikings from "./Hikings";
import Popular_Destination from "./Popular_Destination";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Travel | Home</title>
            </Helmet>
            
            <Banner></Banner>
            
            <Popular_Destination></Popular_Destination>

            <Hikings></Hikings>

            <Feedback></Feedback>
            
            
         
        </div>
    );
};

export default Home;