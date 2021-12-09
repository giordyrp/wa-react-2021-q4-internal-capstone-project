import React from 'react';
import Col from '../Col';
import ProductCard from '../ProductCard/ProductCard';
import Row from '../Row';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import Spinner from '../Spinner';
import Empty from '../Empty';
import { useHistory } from 'react-router';
import { setParam } from '../../utils/functions';

const ProductList = ({ products, loading, grid, pagination }) => {
  const page = products.page;
  const totalPages = products.total_pages;

  const history = useHistory();  
  const onChangePage = (page) => {
    history.push(setParam('page', page));
  };

  return (
    <>
      <Row wrap="wrap" justify="flex-start">
        {loading ? (
          <Spinner />
        ) : products.results_size === 0 ? (
          <Empty message="No Results" />
        ) : (
          products.results.map((product) => (
            <Col key={product.id} {...grid}>
              <ProductCard product={product} />
            </Col>
          ))
        )}
      </Row>
      {!loading && pagination && products.results_size > 0 && <Pagination page={page} totalPages={totalPages} onChange={onChangePage} />}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired, 
  grid: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }),
  pagination: PropTypes.bool
};

export default ProductList;
