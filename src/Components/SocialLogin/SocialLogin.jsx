import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const {googleSignIn}=useAuth();
    const axiosPublic=useAxiosPublic();
    const navigate =useNavigate();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
           const userInfo={
                email:result.user.email,
                name:result.user.displayName,
                photo:result.user.photoURL,
           }
           axiosPublic.post('/users',userInfo)
           .then(res=>{
            console.log(res.data);
            navigate('/')
           })
          
        })
    }
  return (
    <div className="w-full">
      <button
      onClick={handleGoogleSignIn}
        type="button"
        className="flex items-center justify-center btn px-4 py-2  w-full  font-bold rounded-md shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
      >
        <svg
          className="w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.73 1.26 9.2 3.35l6.88-6.88C36.44 2.55 30.61 0 24 0 14.88 0 7.06 5.37 3.51 13.1l7.65 5.94C13.05 12.28 18.15 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.51 24.57c0-1.8-.16-3.56-.45-5.27H24v10h12.64c-.57 3.07-2.23 5.68-4.7 7.44l7.34 5.69C43.63 38.14 46.51 31.85 46.51 24.57z"
          />
          <path
            fill="#4A90E2"
            d="M9.86 28.66c-1.37-4.1-1.37-8.82 0-12.93L2.21 9.77C-2.17 19.6-2.17 28.4 2.21 38.23l7.65-5.94z"
          />
          <path
            fill="#FBBC05"
            d="M24 46c6.14 0 11.6-2.07 15.48-5.59l-7.34-5.69c-2.04 1.39-4.65 2.21-8.14 2.21-5.84 0-10.94-2.78-14.19-7.14l-7.65 5.94C7.06 42.63 14.88 48 24 48z"
          />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
