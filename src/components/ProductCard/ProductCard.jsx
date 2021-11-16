import React from 'react';
import * as Styled from './ProductCard.styled';
import PropTypes from 'prop-types';

const ProductCard = ({ product: { data } }) => {
  const { name, category, price, mainimage } = data;
  return (
    <Styled.ProductCard>
      <Styled.Image src={mainimage.url} />
      <Styled.StyledFlexDiv direction="column" align="flex-start" width="-webkit-fill-available">
        <Styled.Category>{category.slug}</Styled.Category>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Price>${price}</Styled.Price>
      </Styled.StyledFlexDiv>
    </Styled.ProductCard>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
