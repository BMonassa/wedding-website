import {
  Container,
  ContainerGift,
  ContainerLine,
  ContainerWrapper,
} from './styles';

import Gift from '../../components/Gift';
import Margin from '../../components/Margin';
import TextCo from '../../components/TextCo';
import Line from '../../components/Line';
import giftListInfo from './info';

export default function GiftList() {

  return (
    <Container>
      <Margin />

      <ContainerWrapper>
        <TextCo
          size={22}
          color="#000000"
          fontweight={500}
          title="LISTA DE PRESENTE"
        />

        <TextCo
         size={16}
         color="#4c4c4f"
         fontweight={400}
          title="QUERIDOS FAMILIARES E AMIGOS, PARA NÓS, A PRESENÇA DE VOCÊS NESTE DIA TÃO ESPECIAL É O MAIOR PRESENTE QUE PODERÍAMOS RECEBER MAS, SE VOCÊS TAMBÉM QUISEREM NOS PRESENTEAR, FICAREMOS MUITO AGRADECIDOS. COM AMOR, MONIQUE E BRUNO."
        />

        <ContainerLine>
          <Line />
        </ContainerLine>

        <ContainerGift>
          {Object.values(giftListInfo).map((gift, index) => (
            <Gift
              key={index}
              image={gift.image}
              title={gift.title}
              description={gift.description}
              price={gift.price}
            />
          ))}

        </ContainerGift>
      </ContainerWrapper>
    </Container>
  );
}
