import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home/Home";


const Main = () => {
    return (
        <div id="home" className="bg-gray-800">
            < Navbar ></Navbar >
            <Home></Home>
            <Footer></Footer>
            <Toaster></Toaster>
        </div >
    );
};

export default Main;