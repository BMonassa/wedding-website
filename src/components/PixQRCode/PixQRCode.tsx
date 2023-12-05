import QRCode from 'qrcode.react';
import { Container } from './styles';


export default function PixQRCode() {

  const valorPix = '00020126700014br.gov.bcb.pix0136d86c3b25-3124-4ce4-a20f-9e4e269af7590208Presente5204000053039865802BR5925BRUNO MONASSA FLORES DE A6007NITEROI62580520SAN2023102015182536550300017br.gov.bcb.brcode01051.0.0630493B2'

  return(

    <Container>
      <QRCode value={valorPix} size={240} />
    </Container>
  )
}

