import React from 'react';
import * as Styled from './ProductCategoryFilter.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';

const ProductCategoryFilter = ({ categories, onSelect, selected }) => {
  return (
    <Styled.ProductFilter>
      <h3>Categories</h3>
      <FlexDiv direction="column" align="flex-start">
        {categories.results.map((category) => {
          const {
            id,
            data: { name },
          } = category;

          return (
            <Styled.Category key={id} type={selected.includes(id) ? "primary" : "transparent"} onClick={() => onSelect(id)}>
              {name}
            </Styled.Category>
          );
        })}
      </FlexDiv>
    </Styled.ProductFilter>
  );
};

ProductCategoryFilter.propTypes = {
  categories: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string)
};

export default ProductCategoryFilter;
