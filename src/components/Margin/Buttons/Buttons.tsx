import TextCo from "../../TextCo";
import { Button, Container } from "./styles";
import { Link } from 'react-router-dom';

export default function Buttons(){
  return(
    <Container>

      <Link to='/'>
        <Button>
          <TextCo size={16} color="#000000" title='INICIO'/>
        </Button>
      </Link>

      <Link to='/About'>
          <Button>
            <TextCo size={16} color="#000000" title='SOBRE NÓS'/>
          </Button>
      </Link>


      <Link to='/GiftList'>
        <Button>
          <TextCo size={16} color="#000000" title='LISTA DE PRESENTES'/>
        </Button>
      </Link>



    </Container>
  )
}
