import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const FoodCard = ({ item }) => {
  const {user} =useAuth();
  const axiosSecure=useAxiosSecure();
  const { name, image, price, recipe,_id } = item;
const navigate=useNavigate();
const location=useLocation();
  const handleAddToCart =async ()=>{
if(user && user.email){
const cartItem = {
  menuId : _id,
  email:user?.email,
  name,
  image,
  price
}
await axiosSecure.post('/carts',cartItem)
.then(res=>{
  if(res.data.insertedId){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Food added to your cart",
      showConfirmButton: false,
      timer: 1500
    });
  }
})
}else{
  Swal.fire({
    title: "Your are not logged in",
    text: "Please login to add to the cart",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Login"
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/login',{state:{from:location}})
    }
  });
}
  }
  return (
    <div className="card bg-base-100  shadow-xl rounded-none">
      <figure className="">
        <img src={image} alt={name} className="" />
      </figure>
      <p className="absolute right-0 bg-slate-700 text-white mt-2 mr-2 text-sm p-1">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
          onClick={handleAddToCart}
          className="btn btn-outline border-0 border-b-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
