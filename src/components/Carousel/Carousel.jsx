import React from 'react';
import * as Styled from './Carousel.styled';
import PropTypes from 'prop-types';

const Carousel = ({ title, elements, elementName, card: Card }) => {
  const actions = (
    <Styled.Controls>
      <Styled.Control rounded>{'<'}</Styled.Control>
      <Styled.Control rounded>{'>'}</Styled.Control>
    </Styled.Controls>
  );
  
  return (
    <Styled.Carousel title={title} actions={actions}>
      <Styled.Cards>
        {elements.results.map((element) => (
          <Card key={element.id} {...{ [elementName]: element }} />
        ))}
      </Styled.Cards>
    </Styled.Carousel>
  );
};

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.object.isRequired,
  elementName: PropTypes.string.isRequired,
  card: PropTypes.func.isRequired,
};

export default Carousel;
