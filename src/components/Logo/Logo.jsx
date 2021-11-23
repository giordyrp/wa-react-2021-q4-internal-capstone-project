import React, { useContext } from 'react';
import LogoLight from '../../assets/images/ehome-light.png';
import LogoDark from '../../assets/images/ehome-dark.png';
import * as Styled from './Logo.styled';
import PropTypes from 'prop-types';
import { RouterContext } from '../../contexts/routerContext';

const Logo = (props) => {
  const { setRoute } = useContext(RouterContext);

return <Styled.Logo src={props.dark ? LogoDark : LogoLight} onClick={() => setRoute('/')} />;

};

Logo.propTypes = {
  dark: PropTypes.bool,
};

export default Logo;
