import {Link, useLocation} from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

import {Button, Container, ContainerTitle, Holder, PaymentHolder} from './styles';

import TextCo from '../../components/TextCo';
import Pay from '../../components/Pay';
import Margin from '../../components/Margin';
import Line from '../../components/Line';

import {useCart} from '../../Context/CartContext/CartContext';

export default function Payment() {
  const {cart} = useCart();

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

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const paramsTitle = searchParams.get('paramsTitle');
  const paramsPrice = searchParams.get('paramsPrice');
  const paramsImage = searchParams.get('paramsImage');
  // const paramsPay = searchParams.get("paramsPay");

  const fullPriceStripe = priceFull * 100

  return (
    <div>
      <Margin />

      <Container>
        <ContainerTitle>
          <TextCo
            size={22}
            fontweight={500}
            title="LISTA DE PRESENTE VIRTUAL"
          />
          <TextCo
            size={16}
            fontweight={500}
            title="QUERIDOS FAMILIARES E AMIGOS, PARA NÓS, A PRESENÇA DE VOCÊS NESTE DIA TÃO ESPECIAL É O MAIOR PRESENTE QUE PODERÍAMOS RECEBER. MAS, SE VOCÊS TAMBÉM QUISEREM NOS PRESENTEAR, FICAREMOS MUITO AGRADECIDOS. COM AMOR, MONIQUE E BRUNO"
          />
        </ContainerTitle>

        <Line />

        <Holder>
          <Link to={'/GiftList'}>
            <Button onClick={() => console.log('teste')}>
              <TextCo size={18} title="<- Voltar para a lista de presente" />
            </Button>
          </Link>
        </Holder>

        <Pay
          GiftTitle={paramsTitle}
          GiftPrice={paramsPrice}
          GiftImage={paramsImage}
        />

        <Holder>
          <Link
            to={`/FinalizePayment?paramsTitle=${paramsTitle}&paramsPrice=${paramsPrice}&paramsPriceFull=${priceFull}`}>
            <Button onClick={() => console.log('teste')}>
              <TextCo size={18} title={'Finalizar compra'} />
            </Button>
          </Link>

          {/* <PaymentHolder>
            <Elements stripe={stripePromise}>
              <Checkout fullPrice={fullPriceStripe} />
            </Elements>
          </PaymentHolder> */}
        </Holder>



        <Line />
      </Container>
    </div>
  );
}
