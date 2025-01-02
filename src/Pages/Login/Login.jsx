import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    // const captchaRef= useRef(null)
    const navigate=useNavigate();
    const location = useLocation();
    const[disabled,setDisabled]=useState(true)
      const from = location.state?.from?.pathname || '/'
    useEffect(()=>{
        loadCaptchaEnginge(6); 
      },[])
      const {signIn}=useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "LOGIN SUCCESSFUL",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from,{replace:true})
    })
  };

  const handleValidateCaptcha=(e)=>{
    
    const user_captcha_value=e.target.value;
    if (validateCaptcha(user_captcha_value)==true) {
        setDisabled(false)
    }else{
        setDisabled(true)
    }
  }

  return (
    <>
    <Helmet>
        <title>Bistro | Sign In</title>
    </Helmet>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm s shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label border rounded-lg my-2">
              <LoadCanvasTemplate />
              </label>
              <input
             onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="Type the captcha above"
                className="input input-bordered"
                required
              />
           
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} type="submit" value="Login" className="btn btn-primary" />
            </div>
          <span className='text-sm text-center mt-5'> New to here? <Link className='underline cursor-pointer' to='/signUp'>signUp Now</Link></span>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
