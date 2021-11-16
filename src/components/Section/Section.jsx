import React from 'react';
import * as Styled from './Section.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';

const Section = ({ title, actions, className, children }) => {
  return (
    <Styled.Section className={className}>
      <FlexDiv justify="space-between">
        {title && <Styled.Title>{title}</Styled.Title>}
        {actions}
      </FlexDiv>
      {children}
    </Styled.Section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.element
};

export default Section;
