import {
  Container,
  Image,
  ContainerImage,
} from './styles';

import logoImage from '../../assets/image/NoronhaHeader.png';

export default function Header() {
  return (
    <Container>
      <ContainerImage>
        <Image src={logoImage} />
      </ContainerImage>
    </Container>
  );
}
