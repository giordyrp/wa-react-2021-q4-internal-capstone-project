import React from 'react';
import Col from '../Col';
import ProductCard from '../ProductCard/ProductCard';
import Row from '../Row';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import Spinner from '../Spinner';
import Empty from '../Empty';

const ProductList = ({ products, loading }) => {
  const page = products.page;
  const totalPages = products.total_pages;

  return (
    <>
      <Row wrap="wrap" justify="flex-start">
        {loading ? (
          <Spinner />
        ) : products.results.length === 0 ? (
          <Empty message="No Results" />
        ) : (
          products.results.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))
        )}
      </Row>
      {!loading && products.results.length > 0 && <Pagination page={page} totalPages={totalPages} />}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ProductList;
