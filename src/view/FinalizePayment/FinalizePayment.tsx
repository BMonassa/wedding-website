import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { useCart } from "../../Context/CartContext/CartContext";

import { api } from "../../lib/axios";
import axios from "axios";

import Margin from "../../components/Margin";
import TextCo from "../../components/TextCo";
import Summary from "../../components/Summary";
import { Button, Container, Form, FormName, FormDescription, Holder, SummaryContainer, SummaryHolder } from "./styles";


import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from '../../components/Checkout/Checkout';
import Pix from "../../components/Pix";


const stripePromise = loadStripe('pk_live_51NoEI2EyXuhlatBRqLzEz64elDZUMqpLjxrfgLV83vkCENqmVjCRGuoWVRkbcoYFOFxLPNeG6IWpPP1haVaj26hd00Dm2ZbXzt');

export default function FinalizePayment() {
  const { cart } = useCart();

  const location = useLocation();

  const calcularTotal = (cart: any[]) => {
    try {
      return cart.reduce(
        (total: number, { price, quantity }: any) =>
          total + parseFloat(price) * quantity,
        0,
      );
    } catch (error) {
      console.error('Ocorreu um erro ao calcular o total:', error);
      return 0;
    }
  };

  const priceFull = calcularTotal(cart);

  const fullPriceStripe = priceFull * 100


  const searchParams = new URLSearchParams(location.search);
  const paramsPriceFull = searchParams.get("paramsPriceFull");

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [full, setFull] = useState(true);

  const [drawer, setDrawer] = useState(false);

  const titleGift = cart.map((item) => item.title)
  const title = titleGift
  const price = priceFull

  async function FinalizePayment() {
    if (name === '') {
      setFull(false)
    } else {
      try {
        const response = await api.post('/videos', { title, name, description, price });
        console.log(response.data, 'foooi postadoo')

      } catch (error) {
        console.log(error, 'não foi')
      }
    }
  }

  function finalizePaymentePix(){
    setDrawer(true)
    FinalizePayment()
  }

  return (
    <Container>
      <Margin />

      {drawer === true ? (
        <Pix onClick={() => { setDrawer(false) }} />
      ) : null}

      <TextCo size={22} fontweight={600} title='FINALIZE A SUA COMPRA' />

      <Summary subTotal={paramsPriceFull} />

      <SummaryContainer>
        <SummaryHolder>

          <TextCo size={16} fontweight={400} title='Mande uma mensagem para o casal' />

          <Form>
            {name === '' ? (
              <TextCo size={12} color="red" title='* Campo obrigatório *' />
            ) : null}
            <FormName
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              user-scalable="no" />
          </Form>

          <Form>
            <FormDescription
              placeholder="Mensagens"
              value={description}
              onChange={(e) => setDescription(e.target.value)} />
          </Form>

        </SummaryHolder>
      </SummaryContainer>

      {name !== '' ? (
        <Holder>
          <Button onClick={() => finalizePaymentePix()}>
            <TextCo size={18} title='Pix' />
          </Button>

          <Elements stripe={stripePromise}>
            <Checkout onClick={() => FinalizePayment()} fullPrice={fullPriceStripe} />
          </Elements>
        </Holder>
      ) : null
      }
    </Container>


  )
}
