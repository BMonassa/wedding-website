import { Link, useLocation } from "react-router-dom";
import PixQRCode from "../../components/PixQRCode";
import Margin from "../../components/Margin";
import { Button, Container, Form, FormName, FormDescription,  Holder, SummaryContainer, SummaryHolder } from "./styles";
import TextCo from "../../components/TextCo";
import { useCart } from "../../Context/CartContext/CartContext";
import Summary from "../../components/Summary";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import axios from "axios";

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from '../../components/Checkout/Checkout';
import Pix from "../../components/Pix";


const stripePromise = loadStripe('pk_live_51NoEI2EyXuhlatBRqLzEz64elDZUMqpLjxrfgLV83vkCENqmVjCRGuoWVRkbcoYFOFxLPNeG6IWpPP1haVaj26hd00Dm2ZbXzt');

export default function FinalizePayment(){
  const { cart } = useCart();

  const location = useLocation();

  const calcularTotal = (cart: any[]) => {
    try {
      return cart.reduce(
        (total: number, {price, quantity}: any) =>
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
  const paramsPrice = searchParams.get("paramsPrice");
  const paramsTitle = searchParams.get("paramsTitle");

  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3333/videos');
        setData(result.data);
        console.log('=========> FUNCIONOOOOU', result.data)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const titleGift = cart.map((item) => item.title)
  const title = titleGift
  const price = priceFull

  async function FinalizePayment(){
    try{
      const response = await api.post('/videos', {title, name, price});
      console.log(response.data, 'foooi postadoo')

    } catch (error) {
      console.log(error, 'não foi')
    }
  }

  return(
      <Container>
      <Margin/>

    {drawer === true ?(
      <Pix onClick={() => {setDrawer(false)}}/>
    ): null}

      <TextCo size={24}title='FINALIZE A SUA COMPRA'/>

      <Summary subTotal={paramsPriceFull}/>

      <SummaryContainer>
        <SummaryHolder>

        <TextCo size={22} title='REALIZAR PAGAMENTO'/>

        <Form>
          {name === '' ? (
            <TextCo size={10} color="red" title='* Campo obrigatorio *' />
          ) : null}
          <FormName
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </Form>

        <Form>
          <FormDescription
            type="text"
            placeholder="Mensagens"
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
        </Form>

        </SummaryHolder>
      </SummaryContainer>

      {/* <YourComponent/> */}

      {/* <PixQRCode keyPix="d86c3b25-3124-4ce4-a20f-9e4e269af759" value='100' title='carro'/> */}

      <Holder>
          <Button onClick={() => setDrawer(true)}>
            <TextCo size={18} title='Pix'/>
          </Button>

          <Elements stripe={stripePromise}>
            <Checkout fullPrice={fullPriceStripe} />
          </Elements>

      </Holder>




      <Holder>
        <Link to={`/Pix?paramsTitle=${paramsTitle}&paramsPrice=${paramsPrice}`}>
          <Button onClick={() => FinalizePayment()}>
            <TextCo size={18} title='Após efetuar o pagamento, clique aqui'/>
          </Button>
        </Link>
      </Holder>



      </Container>


  )
}
