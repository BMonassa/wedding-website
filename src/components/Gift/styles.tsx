import styled from 'styled-components';

export const Container = styled.div`
  border-width: 2px;
  margin-top: 80px;
`;

export const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  /* background-color: #e2f1f7; */
  background-color: #caeaf6;
  width: 350px;
  height: 500px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: 20px;
  margin-right: 20px;

  /* @media (max-width: 768px) {
  width: 300px;
  height: 450px;
} */
`;

export const HolderText = styled.div`
  padding-top: 32px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  padding-right: 26px;
  padding-left: 26px;
  border-radius: 20%;
`;

export const H1 = styled.h1`
  font-size: 20px;
`;

export const P = styled.p`
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color:  #55a2d1;
  color: #fff;
  border: none;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  margin-bottom: 64px;
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
