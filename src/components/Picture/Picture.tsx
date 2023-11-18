import { Container, ContainerImg, ImgWrapper } from "./styles";

import Noivado from '../../assets/image/4x4/Noivado.jpg'
import Chalezinho from '../../assets/image/4x4/Chalezinho.jpg'
import Bonito from '../../assets/image/4x4/Bonito.jpg'
import Texas from '../../assets/image/4x4/Texas.jpg'
import Noronha from '../../assets/image/4x4/Noronha.jpg'
import Piratininga from '../../assets/image/4x4/Piratininga.jpg'
import Vidigal from '../../assets/image/4x4/Vidigal.jpg'
import Chalezinho2 from '../../assets/image/4x4/Chalezinho2.jpg'
import Festa from '../../assets/image/4x4/Festa.jpg'

import TextCo from "../TextCo";

export default function Picture(){
  return(
    <Container>
      <ContainerImg>
      <ImgWrapper src={Noronha}/>
      <ImgWrapper src={Vidigal}/>
      <ImgWrapper src={Piratininga}/>
      <ImgWrapper src={Bonito}/>
      <ImgWrapper src={Chalezinho2}/>
      <ImgWrapper src={Chalezinho}/>
      <ImgWrapper src={Texas}/>

        <ImgWrapper src={Festa}/>
      </ContainerImg>
    </Container>
  )
}
