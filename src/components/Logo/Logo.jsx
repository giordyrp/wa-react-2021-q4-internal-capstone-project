import React from 'react';
import LogoLight from '../../assets/images/ehome-light.png';
import LogoDark from '../../assets/images/ehome-dark.png';
import * as Styled from './Logo.styled';
import PropTypes from 'prop-types';

const Logo = (props) => <Styled.Logo src={props.dark ? LogoDark : LogoLight} {...props}/>;

Logo.propTypes = {
  dark: PropTypes.bool,
};

export default Logo;
