import React from 'react';
import FlexDiv from '../FlexDiv';
import * as Styled from './CategoryCard.styled';

const CategoryCard = ({ category: { data } }) => {
  return (
    <Styled.CategoryCard cover={<Styled.Cover src={data.main_image.url} alt={data.main_image.alt} />}>
      <FlexDiv width="-webkit-fill-available">
        <p>{data.name}</p>
      </FlexDiv>
    </Styled.CategoryCard>
  );
};

export default CategoryCard;
