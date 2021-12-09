import React from 'react';
import LogoLight from '../../assets/images/ehome-light.png';
import LogoDark from '../../assets/images/ehome-dark.png';
import * as Styled from './Logo.styled';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const Logo = (props) => {
  const history = useHistory();
  return <Styled.Logo src={props.dark ? LogoDark : LogoLight} onClick={() => history.push('/')} />;
};

Logo.propTypes = {
  dark: PropTypes.bool,
};

export default Logo;
