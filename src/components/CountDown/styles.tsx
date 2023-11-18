import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TextDayNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 50px;
  color: white;
  border-radius: 20px;
  background-color: #67b3de;
  padding-left: 32px;
  padding-right: 32px;
  margin-left: 8px;
  margin-top: 22px;
  font-size: 10px;


  @media (max-width: 768px) {
  width: 25px;
  height: 50px;
  font-size: 10px;
  }
`;

export const TextDay = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-align: center;
  justify-content: center;

`;

export const ContainerText = styled.div`
  flex-direction: row;
`;
