import React, { useContext, useState } from 'react';
import * as Styled from './Header.styled';
import FlexDiv from '../FlexDiv';
import Logo from '../Logo';
import { useHistory } from 'react-router';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductCartContext } from '../../contexts/ProductCartContext';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { cart } = useContext(ProductCartContext);
  const history = useHistory();

  const toggleShowSearch = () => setShowSearch(!showSearch);
  return (
    <Styled.Nav justify="space-between" align="center" wrap="wrap">
      {showSearch ? (
        <>
          <Button color="transparent" icon={<FontAwesomeIcon icon={faArrowLeft} />} size="large" onClick={toggleShowSearch} />
          <Styled.MobileSearchInput value={searchValue} onChange={(evt) => setSearchValue(evt.target.value)} onSearch={() => history.push(`/search?q=${searchValue}`)} width="80%" />
        </>
      ) : (
        <>
          <FlexDiv align="center">
            <Styled.Hamburger active={showMenu} onClick={() => setShowMenu(!showMenu)}>
              <span />
              <span />
              <span />
            </Styled.Hamburger>
            <Logo data-testid="header-logo" />
          </FlexDiv>
          <Styled.DesktopSearchInput value={searchValue} onChange={(evt) => setSearchValue(evt.target.value)} onSearch={() => history.push(`/search?q=${searchValue}`)} width="250px" />
          <Styled.Menu active={showMenu}>
            <Styled.MenuLinks>
              <Styled.MenuLink to="/" exact>
                Home
              </Styled.MenuLink>
              <Styled.MenuLink to="/products" onClick={toggleShowSearch}>
                Products
              </Styled.MenuLink>
              <Styled.MenuLink to="/contact" onClick={toggleShowSearch}>
                Contact
              </Styled.MenuLink>
              <Styled.MenuLink to="/about-us" onClick={toggleShowSearch}>
                About Us
              </Styled.MenuLink>
            </Styled.MenuLinks>
          </Styled.Menu>
          <FlexDiv>
            <Styled.ShowSearchButton color="primary" icon={<FontAwesomeIcon icon={faSearch} />} onClick={toggleShowSearch} />
            <Button color="primary" icon={<FontAwesomeIcon icon={faCartPlus} />} onClick={() => history.push('/cart')} data-testid="cart-header-button">
              {cart.reduce((acc, product) => acc + product.count, 0)}
            </Button>
          </FlexDiv>
        </>
      )}
    </Styled.Nav>
  );
};

export default Header;
