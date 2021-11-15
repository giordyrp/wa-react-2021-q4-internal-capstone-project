import React from 'react';
import Row from '../Row';
import Col from '../Col';
import ProductCard from '../ProductCard/ProductCard';
import Section from '../Section';
import PropTypes from 'prop-types';

const FeaturedProducts = ({ products }) => {
  return (
    <Section title="Featured Products">
      <Row wrap="wrap" justify="flex.start">
        {products.results.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Section>
  );
};

FeaturedProducts.propTypes = {
  products: PropTypes.object.isRequired,
};

export default FeaturedProducts;