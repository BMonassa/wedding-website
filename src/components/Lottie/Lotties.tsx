import Lottie from 'lottie-react';
import animationData from '../../assets/Lottie/ampulheta.json';
import { Container } from './styles';

export default function Lotties(){
  return(
    <Container>
        <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 400, height: 150 }} // Personalize o estilo conforme necessário
      />
    </Container>
  )
}
