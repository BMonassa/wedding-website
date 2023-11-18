import CountDown from '../../components/CountDown';
import Header from '../../components/Header';
import Line from '../../components/Line';
import Lotties from '../../components/Lottie';
import Margin from '../../components/Margin';
import Picture from '../../components/Picture';
import TextCo from '../../components/TextCo';
import {
  Container,
  ContainerMap,
  Map,
  ContainerLine,
  ContainerText,
} from './styles';
import Iframe from 'react-iframe';

export default function Main() {
  return (
    <Container>
      <Margin />

      <Header />

      <ContainerText>
        <TextCo
          size={22}
          color="#000000"
          fontweight={500}
          title="COM CARINHO, DAMOS AS BOAS-VINDAS AO NOSSO ESPAÇO!"
        />
        <TextCo
          size={16}
          color="#4c4c4f"
          fontweight={400}
          title="Este site foi criado para nos aproximarmos ainda mais no caminho rumo ao nosso grande dia. Aqui, vocês descobrirão todos os detalhes que tornarão esse momento inesquecível: desde a data e o local do casamento até nossa seleção de presentes que nos deixará radiantes. E não poderiam faltar as fotos que capturam nossa jornada juntos. Agradecemos por fazerem parte dessa etapa única em nossas vidas!"
        />
      </ContainerText>

      <ContainerLine />

      <Lotties />
      <TextCo
        color="#484646"
        fontweight={500}
        size={16}
        title="CONTAGEM REGRESSIVA PARA O GRANDE DIA"
      />
      <CountDown />

      <ContainerLine>
        <Line />
      </ContainerLine>

      <TextCo
        size={22}
        color="#000000"
        fontweight={500}
        title="FOTOS DO CASAL"
      />

      <Picture />

      <ContainerLine>
        <Line />
      </ContainerLine>

      <ContainerMap>
        <TextCo
          size={22}
          color="#000000"
          fontweight={500}
          title="LOCAL DO CASAMENTO"
        />
        <TextCo
          size={18}
          color="#4c4c4f"
          fontweight={400}
          title="Depois de muitas pesquisas e visitas, CasAmar foi o local escolhido para o nosso grande dia."
        />
        <TextCo
          size={16}
          color="#4c4c4f"
          fontweight={400}
          title="Como é de conhecimento de muitos, somos amantes do mar e da praia. CasAmar é a realização perfeita desse amor, um espaço acolhedor que une o conforto à exuberância da natureza à beira-mar. O próprio nome, CasAmar, reflete essa união de casamento, amor e mar."
        />

        <Map>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6145654557736!2d-41.95561212469445!3d-22.74256317937102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97aa85c04cadb9%3A0x7f2da0f60404854d!2sCasAmar!5e0!3m2!1spt-BR!2sbr!4v1693399095371!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
          />
        </Map>
      </ContainerMap>
    </Container>
  );
}
