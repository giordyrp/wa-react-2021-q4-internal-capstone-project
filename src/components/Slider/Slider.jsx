import React, { useEffect, useState } from 'react';
import Slide from '../Slide';
import * as Styled from './Slider.styled';
import PropTypes from 'prop-types';

const Slider = ({ banners }) => {
  const [index, setIndex] = useState(0);
  const totalBanners = banners.results.length;

  useEffect(() => {
    const interval = setInterval(() => setIndex((index) => (index + 1) % totalBanners), 5000);
    return () => clearInterval(interval);
  }, [totalBanners]);

  const controlList = [];
  for (let i = 0; i < totalBanners; i++) {
    controlList.push(<button key={i} onClick={() => setIndex(i)} />);
  }

  return (
    <Styled.Slider>
      <Slide banner={banners.results[index]} />
      <Styled.Controls index={index}>{controlList}</Styled.Controls>
    </Styled.Slider>
  );
};

Slider.propTypes = {
  banners: PropTypes.object,
};

export default Slider;
