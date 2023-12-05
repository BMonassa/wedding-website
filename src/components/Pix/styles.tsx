import styled from 'styled-components';

interface ContainerProps {
  show: boolean;
}

export const SlowAppearanceContainer = styled.div<ContainerProps>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Holder = styled.div`
  position: absolute;
  width: 100%;
  max-width: 300px;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: #f8fbfb;
  border: 2px solid  #55a2d1;
  border-radius: 20px;
  padding: 20px;
`;

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 16px;
`;

export const CloseButton = styled.button`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  background-color: #55a2d1;
  color: #ffffff;
  padding: 0 12px;
  border: none;
`;
