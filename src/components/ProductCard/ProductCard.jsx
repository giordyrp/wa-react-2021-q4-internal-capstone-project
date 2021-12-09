import React from 'react';
import * as Styled from './ProductCard.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const { id, data } = product;
  const {
    name,
    category: { slug: category },
    price,
    mainimage: { url: imageSrc },
  } = data;

  return (
    <Styled.ProductCard onClick={() => window.open(`/product/${id}`,'_blank')}>
      <Styled.Image src={imageSrc} />
      <Styled.StyledFlexDiv direction="column" align="flex-start" width="100%">
        <Styled.Category>{category}</Styled.Category>
        <Styled.Name>{name}</Styled.Name>
        <FlexDiv justify="space-between" align="center" width="100%">
          <Styled.Price>${price}</Styled.Price>
          <Button color="primary" shape="circle" icon={<FontAwesomeIcon icon={faPlus} />} />
        </FlexDiv>
      </Styled.StyledFlexDiv>
    </Styled.ProductCard>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
