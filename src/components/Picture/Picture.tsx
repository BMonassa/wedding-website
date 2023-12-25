import { Container, ContainerImg, ImgWrapper } from "./styles";

import Noivado from '../../assets/image/imgHome/Noivado.jpg'
import Chalezinho from '../../assets/image/imgHome/Chalezinho.jpg'
import Bonito from '../../assets/image/imgHome/Bonito.jpg'
import Texas from '../../assets/image/imgHome/Texas.jpg'
import Noronha from '../../assets/image/imgHome/Noronha.jpg'
import Piratininga from '../../assets/image/imgHome/Piratininga.jpg'
import Vidigal from '../../assets/image/imgHome/Vidigal.jpg'
import Chalezinho2 from '../../assets/image/imgHome/Chalezinho2.jpg'
import Festa from '../../assets/image/imgHome/Festa.jpg'

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
