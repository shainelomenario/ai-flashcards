// This file is for making a Stripe promise to load the Stripe library, used for front end payment processing
import { loadStripe } from '@stripe/stripe-js';
let stripePromise
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
    }
    return stripePromise;
} // Function to load the Stripe library

export default getStripe;
