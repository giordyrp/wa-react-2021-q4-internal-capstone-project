import React from 'react';
import FlexDiv from '../FlexDiv';
import * as Styled from './CategoryCard.styled';
import PropTypes from 'prop-types';

const CategoryCard = ({ category, width, margin }) => {
  const {
    name,
    main_image: { url: coverSrc, alt: coverAlt },
  } = category.data;

  return (
    <Styled.CategoryCard cover={<Styled.Cover src={coverSrc} alt={coverAlt} />} width={width} margin={margin}>
      <FlexDiv justify="center" align="center" width="-webkit-fill-available">
        <p>{name}</p>
      </FlexDiv>
    </Styled.CategoryCard>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
};

export default CategoryCard;
