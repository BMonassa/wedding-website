import Margin from "../../components/Margin"
import TextCo from "../../components/TextCo"
import { Container, ContainerText, Holder, Image } from "./styles"


export default function About() {
  return (
    <Container>
      <Margin />

      <Holder>
        <TextCo title='SOBRE NÓS' />

        <ContainerText>
          <TextCo size={20} fontweight={600} title='O COMEÇO DE TUDO' />
          <TextCo size={14} fontweight={600} title='Tudo começou como um conto de fadas inesperado, e agora estamos prestes a viver o clímax desse romance: o nosso casamento! Navegue pelo nosso site e mergulhe na jornada que nos trouxe até este momento mágico. O coração aperta com a proximidade do grande dia, e cada lembrança é como um pedacinho do nosso conto de amor que queremos compartilhar com você. Descubra os capítulos que nos uniram e celebraremos juntos o início do nosso conto de casamento'/>
        </ContainerText>

      </Holder>
    </Container>
  )
}
