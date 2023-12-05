import React from "react";
import { useCart } from "../../Context/CartContext/CartContext";
import { LineWrapper } from "../Line/styles";
import TextCo from "../TextCo";
import {
  Container,
  ContainerItem,
  Holder,
  Image,
  ImageWrapper,
  ItemHolder,
  Wrapper,
} from "./styles";

interface PayProps {
  GiftTitle: any;
  GiftPrice: any;
  GiftImage: any;
}

interface ItemEditorProps {
  add: () => void;
  remove: () => void;
  count: string | number
}

export default function Pay({ GiftTitle, GiftPrice, GiftImage }: PayProps) {
  const { cart, addToCart, removeFromCart } = useCart();

  const calcularTotal = (cart: any[]) => {
    try {
      return cart.reduce(
        (total: number, { price, quantity }: any) => total + parseFloat(price) * quantity,
        0
      );
    } catch (error) {
      console.error("Ocorreu um erro ao calcular o total:", error);
      return 0;
    }
  };

  const total = calcularTotal(cart);

  return (
    <Container>
      <Wrapper>
        <Holder>
          <TextCo size={18} title="Descrição" />
          <TextCo size={18} title="Quantidade" />
        </Holder>
        <LineWrapper />

        {cart.map((product, index) => (
          <div key={index}>

            <Holder>
              <ImageWrapper>
                <Image src={product.image} />
                <TextCo size={16} title={product.title} />
              </ImageWrapper>

              <ItemEdito add={() => { addToCart(product) }} remove={() => { removeFromCart(product) }} count={product.quantity} />

            </Holder>

            <Holder>
              <TextCo size={18} title="Valor" />
              <TextCo size={18} title={`R$ ${product.price}`} />
            </Holder>

            <LineWrapper />
          </div>
        ))}

        <Holder>
          <TextCo size={18} title="TOTAL" />
          <TextCo size={18} title={`R$ ${total}`} />
        </Holder>
      </Wrapper>
    </Container>
  );

  function ItemEdito({ add, remove, count }: ItemEditorProps) {
    return (
      <ContainerItem>
        <ItemHolder onClick={remove}>
          <TextCo size={20} title='-' />
        </ItemHolder>


        <ItemHolder>
          <TextCo size={20} title={count} />
        </ItemHolder>

        <ItemHolder onClick={add}>
          <TextCo size={20} title='+' />
        </ItemHolder>
      </ContainerItem>
    )
  }
}
