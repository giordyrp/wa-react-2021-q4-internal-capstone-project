import React, { useState, useRef } from 'react';
import * as Styled from './Carousel.styled';
import PropTypes from 'prop-types';

const Carousel = ({ title, elements, elementName, card: Card }) => {
  const [translatePixels, setTranslatePixels] = useState(0);
  const divRef = useRef(null);

  const totalElements = elements.results.length;
  const cardWitdh = 200;
  const cardMargin = 10;
  const CardDivWidth = cardWitdh + cardMargin * 2;
  const totalWidth = CardDivWidth * totalElements;

  const onLeft = () => {
    if (translatePixels + CardDivWidth <= 0) {
      setTranslatePixels((translatePixels) => translatePixels + CardDivWidth);
    }
  };

  const onRight = () => {
    if (translatePixels - CardDivWidth - divRef.current.clientWidth >= -totalWidth - cardWitdh) {
      setTranslatePixels((translatePixels) => translatePixels - CardDivWidth);
    }
  };

  const action = (
    <Styled.Controls>
      <Styled.Control onClick={onLeft} disabled={translatePixels === 0} rounded>
        {'<'}
      </Styled.Control>
      <Styled.Control onClick={onRight} disabled={totalWidth < divRef.current?.clientWidth} rounded>
        {'>'}
      </Styled.Control>
    </Styled.Controls>
  );

  return (
    <Styled.Carousel title={title} action={action}>
      <div ref={divRef}>
        <Styled.Cards width={totalWidth} totalElements={totalElements} translatePixels={translatePixels}>
          {elements.results.map((element) => (
            <Card key={element.id} width={cardWitdh} margin={cardMargin} {...{ [elementName]: element }} />
          ))}
        </Styled.Cards>
      </div>
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
