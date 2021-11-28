import React from 'react';
import * as Styled from './Card.styled';
import PropTypes from 'prop-types';

const Card = ({ cover, className, children, onClick }) => {
  return (
    <Styled.Card className={className} onClick={onClick}>
      {cover}
      {children}
    </Styled.Card>
  );
};

Card.propTypes = {
  cover: PropTypes.element
};

export default Card;
