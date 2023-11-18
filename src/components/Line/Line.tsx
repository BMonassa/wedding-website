import { Container, ImgWrapper, LineWrapper } from "./styles";

import LineImg from '../../assets/image/line.png'
export default function Line(){
  return(
    <Container>
      {/* <LineWrapper /> */}
      <ImgWrapper src={LineImg}/>
    </Container>
  )
}
