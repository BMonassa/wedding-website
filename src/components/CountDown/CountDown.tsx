import useCountdown from "../../hooks/useCountdown";
import TextCo from "../TextCo";
import { Container, Holder, TextDayNumber, TextDay, ContainerText } from "./styles";

export default function CountDown() {
  const [day, hour, minute, second] = useCountdown('May 18, 2024 00:00:00');

  return (
    <Container>
      <Holder>

        <ContainerText>
          <TextDayNumber>
            <TextCo  title={day} />
          </TextDayNumber>
          <TextCo size={16} title='Dias'></TextCo>
        </ContainerText>

        <ContainerText>
          <TextDayNumber>
            <TextCo  title={hour} />
          </TextDayNumber>
          <TextCo size={16} title='Horas'></TextCo>
        </ContainerText>

        <ContainerText>
          <TextDayNumber>
            <TextCo  title={minute} />
          </TextDayNumber>
          <TextCo size={16} title='Minutos'></TextCo>
        </ContainerText>

        <ContainerText>
          <TextDayNumber>
            <TextCo  title={second} />
          </TextDayNumber>
          <TextCo size={16} title='Segundos'></TextCo>
        </ContainerText>

      </Holder>

    </Container>
  )
}
