import styled from 'styled-components';

// Defina o estilo da margem no topo como um componente Styled
export const TopMargin = styled.div`
  height: 100px; /* Altura da margem */
  background-color: transparent; /* Defina o fundo como transparente */
  position: fixed; /* Tornar a margem fixa */
  top: 0; /* Alinhar a margem ao topo da janela */
  left: 0; /* Alinhar a margem à esquerda da janela */
  right: 0; /* Alinhar a margem à direita da janela */
  z-index: 9999; /* Defina um valor alto para a z-index para sobrepor todos os outros elementos */
  transition: background-color 0.5s ease; /* Adicione uma transição para a propriedade background-color */
  box-shadow: 0px -100px 0px 0px #f0f0f0; /* Use o box-shadow para criar uma borda invisível na parte inferior da margem */
`;

export const TextInsideMargin = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 64px 0 64px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 32px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const Brasao = styled.img`
  width: 100px;
  height: 100px;
`;
