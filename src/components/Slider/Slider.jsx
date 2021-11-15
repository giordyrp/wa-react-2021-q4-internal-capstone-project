import React from 'react';
import Slide from '../Slide';
import * as Styled from './Slider.styled';
import PropTypes from 'prop-types';

const Slider = ({ banners }) => {
  const banner = banners.results[0];
  return (
    <Styled.Slider>
      <Slide banner={banner} />
      <Styled.Controls>
        <button />
        <button />
        <button />
      </Styled.Controls>
    </Styled.Slider>
  );
};

Slider.propTypes = {
  banners: PropTypes.object,
};

export default Slider;
