import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
