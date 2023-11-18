import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      // Stripe.js não está pronto ainda.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error('Elemento do cartão não encontrado.');
      setLoading(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post('http://localhost:3333/pagamento', {
          amount: 1000, // Substitua pelo valor correto
          currency: 'usd', // Substitua pela moeda correta
          description: 'Exemplo de pagamento',
          source: id,
        });

        console.log(data); // Lidere com a resposta do servidor aqui

        // Reset do formulário após o pagamento ser confirmado
        if (elements) {
          const card = elements.getElement(CardElement);
          if (card) {
            card.clear();
          }
        }
        setLoading(false);
      } catch (error) {
        // Lidar com erros de chamada da API
        console.error(error);
        setLoading(false);
      }
    } else {
      console.error(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        Pagar
      </button>
    </form>
  );
};

export default CheckoutForm;
