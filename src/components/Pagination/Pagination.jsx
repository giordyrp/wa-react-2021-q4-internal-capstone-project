import React from 'react';
import * as Styled from './Pagination.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';

const Pagination = ({ page, totalPages, onChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(<Styled.Page key={i} color={i === page ? 'primary' : 'white'} onClick={() => onChange(i)}>{i}</Styled.Page>);
  }

  return (
    <FlexDiv justify="center">
      <Styled.Page onClick={() => onChange(page - 1)} disabled={page === 1}>{'<'}</Styled.Page>
      {pages}
      <Styled.Page onClick={() => onChange(page + 1)} disabled={page === totalPages}>{'>'}</Styled.Page>
    </FlexDiv>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Pagination;
