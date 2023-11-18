import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 140px;
`;

export const ContainerTitle = styled.div`
  margin: 32px 32px;
`;

export const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaymentHolder = styled.div`
  padding-left: 8px;
`;

export const Button = styled.button`
  padding: 4px 16px;
  background-color:  #55a2d1;
  color: #fff;
  border: none;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 32px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;


  &:hover {
    background-color:  #3e96ce;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
