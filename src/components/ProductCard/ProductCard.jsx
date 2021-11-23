import React from 'react';
import * as Styled from './ProductCard.styled';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const {
    name,
    category: { slug: category },
    price,
    mainimage: { url: imageSrc },
  } = product.data;

  return (
    <Styled.ProductCard>
      <Styled.Image src={imageSrc} />
      <Styled.StyledFlexDiv direction="column" align="flex-start" width="-webkit-fill-available">
        <Styled.Category>{category}</Styled.Category>
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
