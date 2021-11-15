import React from 'react';
import * as Styled from './Header.styled';
import FlexDiv from '../FlexDiv';
import Logo from '../Logo';

export const Header = () => {
  return (
    <Styled.Nav>
      <FlexDiv>
        <Styled.Hamburger>
          <span />
          <span />
          <span />
        </Styled.Hamburger>
        <Logo data-testid="header-logo"/>
      </FlexDiv>
      <Styled.Menu>
        <Styled.MenuLink href="/">Home</Styled.MenuLink>
        <Styled.MenuLink href="/">Products</Styled.MenuLink>
        <Styled.MenuLink href="/">Contact</Styled.MenuLink>
        <Styled.MenuLink href="/">About Us</Styled.MenuLink>
      </Styled.Menu>
    </Styled.Nav>
  );
};

export default Header;
