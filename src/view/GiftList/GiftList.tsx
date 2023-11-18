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
import giftList from './info';

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
            size={18}
            color="#000000"
            fontweight={500}
            title="QUERIDOS FAMILIARES E AMIGOS, PARA NÓS, A PRESENÇA DE VOCÊS NESTE DIA TÃO ESPECIAL É O MAIOR PRESENTE QUE PODERÍAMOS RECEBER. MAS, SE VOCÊS TAMBÉM QUISEREM NOS PRESENTEAR, FICAREMOS MUITO AGRADECIDOS. COM AMOR, MONIQUE E BRUNO."
          />

          <ContainerLine>
            <Line />
          </ContainerLine>

          <ContainerGift>
            <Gift
              image={giftList.aluguel.image}
              title={giftList.aluguel.title}
              description={giftList.aluguel.description}
              price={giftList.aluguel.price}
            />
            <Gift
              image={giftList.buque.image}
              title={giftList.buque.title}
              description={giftList.buque.description}
              price={giftList.buque.price}
            />
            <Gift
              image={giftList.capacete.image}
              title={giftList.capacete.title}
              description={giftList.capacete.description}
              price={giftList.capacete.price}
            />
            <Gift
              image={giftList.rolo.image}
              title={giftList.rolo.title}
              description={giftList.rolo.description}
              price={giftList.rolo.price}
            />
            <Gift
              image={giftList.carroNoiva.image}
              title={giftList.carroNoiva.title}
              description={giftList.carroNoiva.description}
              price={giftList.carroNoiva.price}
            />
            <Gift
              image={giftList.maquiagem.image}
              title={giftList.maquiagem.title}
              description={giftList.maquiagem.description}
              price={giftList.maquiagem.price}
            />
            <Gift
              image={giftList.psicologo.image}
              title={giftList.psicologo.title}
              description={giftList.psicologo.description}
              price={giftList.psicologo.price}
            />
            <Gift
              image={giftList.idosos.image}
              title={giftList.idosos.title}
              description={giftList.idosos.description}
              price={giftList.idosos.price}
            />
            <Gift
              image={giftList.ressaca.image}
              title={giftList.ressaca.title}
              description={giftList.ressaca.description}
              price={giftList.ressaca.price}
            />

          </ContainerGift>
        </ContainerWrapper>
      </Container>
  );
}
