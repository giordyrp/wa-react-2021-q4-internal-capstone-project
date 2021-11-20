import React from 'react';
import * as Styled from './Pagination.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';

const Pagination = ({ page, totalPages }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    const pageProps = {};
    if (i === page) pageProps.type = 'primary';
    pages.push(<Styled.Page key={i} {...pageProps}>{i}</Styled.Page>);
  }

  return (
    <FlexDiv justify="center">
      <Styled.Page disabled={page === 1}>{'<'}</Styled.Page>
      {pages}
      <Styled.Page disabled={page === totalPages}>{'>'}</Styled.Page>
    </FlexDiv>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Pagination;
