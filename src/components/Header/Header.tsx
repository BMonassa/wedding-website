import {
  Container,
  Image,
  MarginButton,
  Button,
  H1,
  Logo,
  MarginContainer,
  ContainerImage,
  ButtonHeader,
  Title,
  ContainerText,
} from './styles';

import logoImage from '../../assets/image/NoronhaOnda2.png';
import brasaoImage from '../../assets/image/logo-2-2.png';
import TextCo from '../TextCo';

export default function Header() {
  return (
    <Container>
      {/* <MarginContainer>
          // <Logo src={brasaoImage} />

        <MarginButton>
          <Button>
            <H1>Inicio</H1>
          </Button>
          <Button>
            <H1>Sobre nós</H1>
          </Button>
          <Button>
            <H1>O casamento</H1>
          </Button>
          <Button>
            <H1>Fotos</H1>
          </Button>
          <Button>
            <H1>Lista de presentes</H1>
          </Button>
        </MarginButton>

      </MarginContainer> */}
      <ContainerImage>

        <Image src={logoImage} />
        {/* <ButtonHeader>
          <Button>
            <TextCo size={16} color="#000000" title='INICIO'/>
          </Button>
          <Button>
            <TextCo size={16} color="#000000" title='SOBRE NÓS'/>
          </Button>
          <Button>
            <TextCo size={16} color="#000000" title='LISTA DE PRESENTES'/>
          </Button>
        </ButtonHeader> */}


      </ContainerImage>


    </Container>
  );
}
