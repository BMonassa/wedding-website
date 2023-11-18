import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const MarginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: white;
  transform: translate(-0%, -0%);
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.2);
`;

export const  MarginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: flex;
`;

export const Logo = styled.img`
  width: 110px;
  height: 110px;
  padding-left: 64px;
  padding-right: 64px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 26px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const ButtonHeader = styled.div`
  position: absolute;
  top: 5%; /* Posiciona o botão no meio verticalmente */
  left: 60%; /* Posiciona o botão no meio horizontalmente */
`;

export const ContainerImage = styled.div`
  position: relative;
  /* display: inline-block; */
`;

export const H1 = styled.h1`
  font-size: 20px;
`;

export const H2 = styled.h1`
  color: #180f08;
  font-size: 20px;
`;

export const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  font-weight: 100;
  color: #021325
  /* Outros estilos aqui */
`;

export const ContainerText = styled.div`
  margin: 50px 32px 0 32px;
  justify-content: center;
  text-align: center;
  `;





