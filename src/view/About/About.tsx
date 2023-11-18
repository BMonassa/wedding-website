import Margin from "../../components/Margin"
import TextCo from "../../components/TextCo"
import { Container, ContainerText, Holder, Image } from "./styles"

import comeco from '../../assets/image/ImgAbout/comeco2.jpg'

export default function About(){
  return(
    <Container>
      <Margin/>

      <Holder>
        <TextCo title='SOBRE NÓS'/>
        <TextCo size={18} title='AQUI VAMOS CONTAR UM POUCO MAIS SOBRE A NOSSA HISTORIA'/>

        <ContainerText>
        <TextCo size={20} fontweight={1000} title='O COMEÇO DE TUDO'/>
        <Image src={comeco}/>
        <TextCo size={14}title='Por incrível que pareça, nosso encontro ocorreu em um bar. A situação foi improvável, considerando que não costumava frequentar esse tipo de ambiente. Assim que cheguei, lembro-me vividamente de vê-la se preparando para se apresentar com o grupo de pagode. Foi um momento de amor à primeira vista!'/>
        </ContainerText>

      </Holder>
    </Container>
  )
}
