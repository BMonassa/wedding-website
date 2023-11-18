import React, { useState, useEffect } from 'react';
import PixQRCode from "../PixQRCode";
import TextCo from "../TextCo";
import { CloseButton, CloseContainer, Container, Holder } from "./styles";
import styled from 'styled-components';

interface ContainerProps {
  show: boolean;
}

const SlowAppearanceContainer = styled(Container)<ContainerProps>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

interface PixProps {
  onClick: () => void;
}

export default function Pix({ onClick }: PixProps) {
  const [showPix, setShowPix] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPix(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlowAppearanceContainer show={showPix}>
      <Holder>
        <CloseContainer>
          <CloseButton onClick={onClick}>
            <TextCo fontweight={500} size={16} title='Fechar' />
          </CloseButton>
        </CloseContainer>

        <TextCo fontweight={500} title='Use o QRCode' />
        <PixQRCode />
        <TextCo fontweight={500} size={20} title='ou chave pix' />
        <TextCo fontweight={500} size={24} title='177.587.577-66' />
      </Holder>
    </SlowAppearanceContainer>
  );
}
