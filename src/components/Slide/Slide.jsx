import React from 'react';
import * as Styled from './Slide.styled';
import PropTypes from 'prop-types';

const Slide = ({ banner }) => {
  const {
    data: { title, description, main_image },
  } = banner;

  return (
    <Styled.Slide>
      <Styled.Background url={main_image.url}>
        <Styled.Overlay>
          <Styled.Content>
              <Styled.StyledFlexDiv direction="column" align="flex-start">
                <h2>{title}</h2>
                <p>{description[0].text}</p>
              </Styled.StyledFlexDiv>
          </Styled.Content>
        </Styled.Overlay>
      </Styled.Background>
    </Styled.Slide>
  );
};

Slide.propTypes = {
  banner: PropTypes.object,
};

export default Slide;
