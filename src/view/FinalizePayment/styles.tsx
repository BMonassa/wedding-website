import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  margin-top: 140px;
  background-color: #caeaf6;
  padding: 32px 32px 32px 32px ;
`;

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SummaryHolder = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  padding: 8px;
`;

export const Form = styled.div`
`;

export const FormName = styled.input`
  border-radius: 4px;
  border-width: 0;
  padding-left: 1px;
  width: 250px;
  height: 32px;
`;

export const FormDescription = styled.input`
  border-radius: 4px;
  border-width: 0;
  padding-left: 1px;
  width: 250px;
  height: 80px;
  margin-top: 8px;
`;


export const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-right: 4px;

  /* &:hover {
    background-color:  #3e96ce;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  } */
`;
