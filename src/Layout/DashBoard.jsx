import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import {  NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
// import useCart from "../Hooks/useCart";

const DashBoard = () => {
    // const [cart] =useCart();
    const [isAdmin]=useAdmin();
//  const   isAdmin =true
    return (
        <div className="flex">
           <div className="w-64 min-h-screen bg-[#d1a054]">

            <ul className="menu p-8 space-y-4">
              {
                isAdmin ?
                <>
                <li> <NavLink to='/dashboard/adminHome'><FaHome/>Admin Home</NavLink> </li>
                <li>  <NavLink to='/dashboard/addItems'><FaUtensils/> Add Items</NavLink></li>
                <li> <NavLink to='/dashboard/manageItems'><FaList/>Manage Items</NavLink></li>
                <li> <NavLink to='/dashboard/manageBookings'><FaBook/> Manage Bookings</NavLink></li>
                <li>  <NavLink to='/dashboard/AllUsers'><FaUser/> All Users</NavLink></li>
                </>:
                <>
                <li> <NavLink to='/dashboard/userHome'><FaHome/> Home</NavLink> </li>
                <li>  <NavLink to='/dashboard/reservation'><FaCalendar/> reservation</NavLink></li>
                <li> <NavLink to='/dashboard/review'><MdFeedback />Review</NavLink></li>
                <li> <NavLink to='/dashboard/cart'><FaShoppingCart/>Cart</NavLink></li>
                <li>  <NavLink to='/dashboard/paymentHistory'><FaList/>Payment History</NavLink></li>
                </>
              }
                <div className="divider">OR</div>
                <li> <NavLink to='/'><FaHome/> Home</NavLink> </li>
                <li> <NavLink to='/order/salad'><FaSearch/> Menu</NavLink> </li>
                <li> <NavLink to='/order/contact '><FaEnvelope/> Contact</NavLink> </li>
            </ul>
        
           </div>
           <div className="flex-1 p-8">
        <Outlet/>
           </div>
        </div>
    );
};

export default DashBoard;