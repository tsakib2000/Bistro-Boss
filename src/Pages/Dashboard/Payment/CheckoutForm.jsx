import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import useCart from "./../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret,setClientSecret] = useState('')
  const [transactionId,setTransactionId] =useState('')
  const navigate=useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user}=useAuth();
  const [cart] = useCart();
  const price = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  useEffect(() => {
if(price > 0){
  axiosSecure.post("/create-payment-intent",{price})
  .then(res=>{
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
  })
}
  }, [axiosSecure,price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      console.log(paymentMethod);
      setError("");
    }
    //confirm payment
    const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
          email:user?.email || 'anonymous',
          name:user?.displayName || 'anonymous'
        }
      }
    })
    if(confirmError){
      console.log(confirmError);
    }else{
      console.log(paymentIntent);
     if(paymentIntent.status ==='succeeded')
      setTransactionId(paymentIntent.id)
    const payment={
      email:user.email,
      price:price,
      transactionId:paymentIntent.id,
      date:new Date(),
      cartId:cart.map(item=>item._id),
      menuItemId:cart.map(item => item.menuId),
      status:'pending'
    }
  const res=await  axiosSecure.post('/payments',payment)
  console.log(res.data?.paymentResult);
if(res.data?.paymentResult?.insertedId){
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Payment successful",
    showConfirmButton: false,
    timer: 1500
  });
  navigate('/dashboard/paymentHistory')
}
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <button
        className="btn btn-sm my-4 btn-outline"
        type="submit"
        disabled={!stripe || !clientSecret }
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId&& <p className="text-green-500">Your transaction id is :{transactionId} </p>}
    </form>
  );
};

export default CheckoutForm;
