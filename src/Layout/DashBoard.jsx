import { FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import {  NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex">
           <div className="w-64 min-h-screen bg-[#d1a054]">

            <ul className="menu p-8 space-y-4">
                <li> <NavLink to='/dashboard/userHome'><FaHome/> Home</NavLink> </li>
                <li>  <NavLink to='/dashboard/reservation'><FaCalendar/> reservation</NavLink></li>
                <li> <NavLink to='/dashboard/review'><MdFeedback />Review</NavLink></li>
                <li> <NavLink to='/dashboard/cart'><FaShoppingCart/>Cart</NavLink></li>
                <li>  <NavLink to='/dashboard/bookings'><FaList/>Bookings</NavLink></li>
                <div className="divider">OR</div>
                <li> <NavLink to='/'><FaHome/> Home</NavLink> </li>
                <li> <NavLink to='/order/salad'><FaSearch/> Menu</NavLink> </li>
            </ul>
        
           </div>
           <div className="flex-1 p-8">
        <Outlet/>
           </div>
        </div>
    );
};

export default DashBoard;