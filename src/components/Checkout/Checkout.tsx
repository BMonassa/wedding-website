import React, { useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Button, Container } from './styles';
import TextCo from '../TextCo';

interface CheckoutProps {
  fullPrice: number;
}
// const Checkout = ({ fullPrice }: CheckoutProps) =>

export default function Checkout({ fullPrice }: CheckoutProps){
  const [loading, setLoading] = useState(false);
  const [stripe, setStripe] = useState<Stripe | null>(null);

  const handleCheckout = async () => {
    setLoading(true);

    if (!stripe) {
      // Stripe não está pronto ainda.
      return;
    }

    try {
      const stripeResponse = await fetch('https://deploy-wedding.onrender.com/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ price: fullPrice })
      });

      const session = await stripeResponse.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
        setLoading(false);
      }
    } catch (error) {
      console.error('Ocorreu um erro durante o checkout:', error);
      setLoading(false);
    }
  };

  // Carregar o Stripe assim que o componente for montado
  React.useEffect(() => {
    const loadStripeAsync = async () => {
      const stripeInstance = await loadStripe('pk_live_51NoEI2EyXuhlatBRqLzEz64elDZUMqpLjxrfgLV83vkCENqmVjCRGuoWVRkbcoYFOFxLPNeG6IWpPP1haVaj26hd00Dm2ZbXzt');
      setStripe(stripeInstance);
    };
    loadStripeAsync();
  }, []);

  return (
    <Container>
      <Button onClick={handleCheckout} disabled={loading || !stripe}>
      <TextCo size={18} title={'Cartão de crédito'} />

      </Button>
    </Container>
  );
};

