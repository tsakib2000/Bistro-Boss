import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading}=useContext(AuthContext);
    if(loading) return <span className="loading loading-spinner loading-lg"></span>
    if(user) return children
    return <Navigate state={{from:location}} replace to='/login'></Navigate>
};

export default PrivateRoutes;