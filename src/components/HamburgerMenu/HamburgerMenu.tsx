import React, { useState } from 'react';
import { HamburgerMenuContainer, HamburgerIcon, HamburgerLine, MenuOptions, MenuItem } from './styles';
import TextCo from '../TextCo';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <HamburgerIcon onClick={handleMenuClick}>
        <HamburgerLine className={isOpen ? "open" : ""}></HamburgerLine>
        <HamburgerLine className={isOpen ? "open" : ""}></HamburgerLine>
        <HamburgerLine className={isOpen ? "open" : ""}></HamburgerLine>
      </HamburgerIcon>
      {isOpen && (
        <MenuOptions>
          {/* Aqui você pode adicionar suas opções de menu */}
          <MenuItem>INICIO</MenuItem>
          <MenuItem>Opção 2</MenuItem>
          <MenuItem>Opção 3</MenuItem>
          <TextCo size={16} title='INICIO'/>
          <TextCo size={16} title='SOBRE NÓS'/>
          <TextCo size={16} title='LISTA DE PRESENTE'/>
        </MenuOptions>
      )}
    </HamburgerMenuContainer>
  );
};
