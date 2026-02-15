import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not defined');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-12-18.acacia',
    typescript: true,
});

export async function createCheckoutSession({
    orderId,
    items,
    customerEmail,
}: {
    orderId: string;
    items: Array<{
        name: string;
        price: number;
        quantity: number;
    }>;
    customerEmail: string;
}) {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: items.map((item) => ({
            price_data: {
                currency: 'xaf',
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(item.price), // Stripe attend le montant en centimes, mais XAF n'a pas de centimes
            },
            quantity: item.quantity,
        })),
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
        customer_email: customerEmail,
        metadata: {
            orderId,
        },
    });

    return session;
}
