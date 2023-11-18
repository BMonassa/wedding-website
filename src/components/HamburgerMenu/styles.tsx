import styled from 'styled-components';

const HamburgerMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 40px;
  }
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const HamburgerLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: all 0.3s ease;

  &.open {
    transform: rotate(45deg);

    &:nth-child(1) {
      transform: rotate(-45deg) translateY(5px);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg) translateY(-5px);
    }
  }
`;

const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 150px;
  background-color: #55a2d1;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 8px;
`;

const MenuItem = styled.p`
  margin: 10px 0;
  cursor: pointer;
`;

export { HamburgerMenuContainer, HamburgerIcon, HamburgerLine, MenuOptions, MenuItem };
