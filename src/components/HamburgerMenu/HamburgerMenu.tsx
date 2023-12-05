import React, { useState } from 'react';
import { HamburgerMenuContainer, HamburgerIcon, HamburgerLine, MenuOptions, Button } from './styles';
import TextCo from '../TextCo';
import { Link } from 'react-router-dom';

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
          <Link to='/'>
            <Button>
              <TextCo size={16} color="#ffffff" title='INICIO' />
            </Button>
          </Link>

          <Link to='/About'>
            <Button>
              <TextCo size={16} color="#ffffff" title='SOBRE NÓS' />
            </Button>
          </Link>


          <Link to='/GiftList'>
            <Button>
              <TextCo size={16} color="#ffffff" title='LISTA DE PRESENTES' />
            </Button>
          </Link>
        </MenuOptions>
      )}
    </HamburgerMenuContainer>
  );
};
