import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading='Payment' subHeading="Please pay to eat"/>
            <div>
        <Elements stripe={stripePromise}>
<CheckoutForm/>
        </Elements>
            </div>
        </div>
    );
};
export default Payment;
