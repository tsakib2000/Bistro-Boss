import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location =useLocation();
    const isLogin = location.pathname.includes('/login') || location.pathname.includes('/signUp') 
    return (
        <div>
            {isLogin || <Navbar/>}
            <Outlet/>
           {isLogin || <Footer/>}
        </div>
    );
};

export default Main;