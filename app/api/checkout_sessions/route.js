// This file is responsible for handling the checkout session routes
import Stripe from 'stripe'; // Import Stripe


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Initialize the Stripe client with the secret key

const formatAmountForStripe = amount => { return Math.round(amount * 100); }; // Function to format the amount for Stripe

// Function to handle POST requests
export async function POST(req) {
    const params = {
        submit_type: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: { // Fixed missing colon
              currency: 'usd',
              product_data: {
                name: 'Flashcard Subscription',
              },
              unit_amount: formatAmountForStripe(9.99),
              recurring: {
                interval: 'month',
                interval_count: 1,
              },
            },
            quantity: 1,
           },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      }; // Define the parameters for the checkout session
      const checkoutSession = await stripe.checkout.sessions.create(params); // Create the checkout session
      return NextResponse.json(checkoutSession, {
        status: 200,
      }) // Return the checkout session in JSON format
}