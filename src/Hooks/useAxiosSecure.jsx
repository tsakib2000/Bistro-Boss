import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
 const axiosSecure= axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate=useNavigate();
    const {logOut}=useAuth();
    //request interceptor to add authorization header for every secure call the api 
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `bearer ${token}`
        return config
    },
    (error)=>{
return Promise.reject(error)
    }
)
//intercept 401 & 403 status
axiosSecure.interceptors.response.use((response)=>{
return response
},
async  (error)=>{
    const status = error.response.status;
if(status === 401 || status == 403){
    await  logOut()
    navigate('/login')

}
return Promise.reject(error)
}
)
    return axiosSecure
};

export default useAxiosSecure;