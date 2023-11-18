import { Link } from "react-router-dom";
import TextCo from "../TextCo";
import { Container, H1, Holder, HolderText, Image, P, Button } from "./styles";
import { useCart } from '../../Context/CartContext/CartContext';

interface GiftProps {
  image: string;
  title: string;
  description: string;
  price: number;
  onClick?: () => void;
  params?: string | string[]
  paramsSec?: string;
}

export default function Gift({image, title, description, price, onClick, params, paramsSec}: GiftProps){

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ image, title, description, price, quantity: 1 });
  };

  console.log(addToCart)
  return(
    <Container>
      <Holder>
        <HolderText>
          <TextCo color="black" size={22} title={title}/>
          <Image src={image}/>
          <TextCo size={18}title={description}/>
          <TextCo size={22}title={`R$ ${price}`}/>

          <Link to={`/Payment?paramsTitle=${title}&paramsPrice=${price}&paramsImage=${image}&paramsPay=${params}`}>
          <Button onClick={handleAddToCart}>
            <H1>Presentear</H1>
          </Button>
          </Link>
          </HolderText>
      </Holder>
    </Container>
  )
}
