import React, { useEffect, useState } from 'react';
import { Brasao, TextInsideMargin, TopMargin } from './styles';
import TextCo from '../TextCo';
import brasaoImage from '../../assets/image/logo-2-2.png';
import Buttons from './Buttons';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

export default function Margin() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrollingDown(scrollTop > 100);
  };

  return (
    <TopMargin style={{ backgroundColor: scrollingDown ? '#F8F8F8' : 'transparent' }}>
      <TextInsideMargin>
        <Brasao src={brasaoImage} />
        {isMobile ? <HamburgerMenu /> : <Buttons />}
      </TextInsideMargin>
    </TopMargin>
  );
}
