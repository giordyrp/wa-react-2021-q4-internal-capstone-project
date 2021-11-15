import React from 'react';
import * as Styled from './Button.styled';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <Styled.Button {...props}>
      {props.children}
    </Styled.Button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Button;
