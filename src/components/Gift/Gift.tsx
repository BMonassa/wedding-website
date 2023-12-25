import { Link } from "react-router-dom";
import TextCo from "../TextCo";
import { Container, H1, Holder, HolderText, Image, Button } from "./styles";
import { useCart } from '../../Context/CartContext/CartContext';

interface GiftProps {
  image: string;
  title: string;
  description: string;
  price: number;
  params?: string | string[]
}

export default function Gift({ image, title, description, price, params }: GiftProps) {

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ image, title, description, price, quantity: 1 });
  };

  console.log(addToCart)
  return (
    <Container>
      <Holder>
        <HolderText>
          <TextCo color="black" size={18} fontweight={600} title={title} />
          <Image src={image} />
          <TextCo size={16} fontweight={500} title={description} />
          <TextCo size={18} title={`R$ ${price}`} />

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
