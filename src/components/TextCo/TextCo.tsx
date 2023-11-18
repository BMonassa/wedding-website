import { Container, Title } from "./styles";

interface TextCoProps {
  title: string | number
  color?: string;
  size?: number;
  fontweight?: string | number;
}


export default function TextCo({title, color, fontweight, size}: TextCoProps){
  return(
    <Container>
      <Title color={color} fontweight={fontweight} size={size}>{title}</Title>
    </Container>
  )
}
