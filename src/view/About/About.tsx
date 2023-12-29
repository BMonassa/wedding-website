import Margin from "../../components/Margin"
import TextCo from "../../components/TextCo"
import { Container, ContainerImg, ContainerText, Holder, Image } from "./styles"

import arrumado from '../../assets/image/ImgAbout/arrumado.jpg'
import casamentoPrima from '../../assets/image/ImgAbout/casamentoPrima.jpg'
import festa from '../../assets/image/ImgAbout/festa.jpg'
import flamengo from '../../assets/image/ImgAbout/flamengo.jpg'
import icarai from '../../assets/image/ImgAbout/icarai.jpg'
import noi from '../../assets/image/ImgAbout/noi.jpg'
import noivado from '../../assets/image/ImgAbout/noivado.jpg'
import noronha from '../../assets/image/ImgAbout/noronha.jpg'
import praia from '../../assets/image/ImgAbout/praia.jpg'
import restaurantesp from '../../assets/image/ImgAbout/restaurantesp.jpg'
import sp from '../../assets/image/ImgAbout/sp.jpg'
import texas from '../../assets/image/ImgAbout/texas.jpg'
import thor from '../../assets/image/ImgAbout/thor.jpg'
import trilha from '../../assets/image/ImgAbout/trilha.jpg'


export default function About() {
  return (
    <Container>
      <Margin />

      <Holder>
        <ContainerText>
          <TextCo size={20} color="#000000" fontweight={500} title='O COMEÇO DE TUDO' />

          <TextCo
            size={18}
            color="#000000"
            fontweight={500}
            title='Tudo começou como um conto de fadas inesperado, e agora estamos prestes a viver o clímax desse romance: o nosso casamento! Navegue pelo nosso site e mergulhe na jornada que nos trouxe até este momento mágico. O coração aperta com a proximidade do grande dia, e cada lembrança é como um pedacinho do nosso conto de amor que queremos compartilhar com você. Descubra os capítulos que nos uniram e celebraremos juntos o início do nosso conto de casamento'
          />
        </ContainerText>

        <ContainerImg>
          <Image src={casamentoPrima} />
          <Image src={flamengo} />
          <Image src={trilha} />
          <Image src={icarai} />
          <Image src={thor} />
          <Image src={noi} />
          <Image src={noivado} />
          <Image src={noronha} />
          <Image src={praia} />
          <Image src={restaurantesp} />
          <Image src={sp} />
          <Image src={texas} />
        </ContainerImg>
      </Holder>
    </Container>
  )
}
