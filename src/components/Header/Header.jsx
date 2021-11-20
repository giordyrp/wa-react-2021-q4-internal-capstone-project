import React, { useState } from 'react';
import * as Styled from './Header.styled';
import FlexDiv from '../FlexDiv';
import Logo from '../Logo';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Styled.Nav>
      <FlexDiv align="center">
        <Styled.Hamburger active={showMenu} onClick={() => setShowMenu(!showMenu)}>
          <span />
          <span />
          <span />
        </Styled.Hamburger>
        <Logo data-testid="header-logo" />
      </FlexDiv>
      <Styled.Menu active={showMenu}>
        <Styled.MenuLink href="/">Home</Styled.MenuLink>
        <Styled.MenuLink href="/">Products</Styled.MenuLink>
        <Styled.MenuLink href="/">Contact</Styled.MenuLink>
        <Styled.MenuLink href="/">About Us</Styled.MenuLink>
      </Styled.Menu>
    </Styled.Nav>
  );
};

export default Header;
