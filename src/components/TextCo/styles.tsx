import styled from 'styled-components';

interface TextCoProps {
  size?: number;
  color?: string;
  fontweight?: string | number;
}

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const Title = styled.h1<TextCoProps>`
  /* font-family: 'Montserrat', sans-serif; */
  font-family: 'Roboto Flex', sans-serif;
  font-size: ${({ size }) => size && `${size}px`};
  color: ${({ color }) => color && `${color}`};
  font-weight: ${({ fontweight }) => fontweight && `${fontweight}`};
`;
