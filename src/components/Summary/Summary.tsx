import { useEffect, useState } from "react";
import { useCart } from "../../Context/CartContext/CartContext";
import PixQRCode from "../PixQRCode";
import TextCo from "../TextCo";
import { Container, Holder, SummaryContainer, SummaryForm, Title, Image, Discription } from "./styles";

interface SummaryProps {
  subTotal: string | null;
}

export default function Summary({ subTotal }: SummaryProps){
  const { cart } = useCart();

  return(
    <Container>
      <Holder>

      <Title>
        <TextCo size={18}title='Resumo da compra'/>
      </Title>

      {cart.map((product, index) => (
      <div key={index}>
          <SummaryContainer>
          <SummaryForm>

            <Image src={product.image} />

            <Discription>
            <TextCo size={14} title={`${product.title}`} />
            </Discription>

            <TextCo size={14} title={`Valor R$: ${product.price}`} />

            </SummaryForm>
          </SummaryContainer>
      </div>
    ))}

      <Title>
        <TextCo size={18}title={`Subtotal R$: ${subTotal}`}/>
      </Title>

      </Holder>
    </Container>
  )
}
