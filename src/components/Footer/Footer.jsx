import React from 'react';
import Col from '../Col';
import FlexDiv from '../FlexDiv';
import Logo from '../Logo';
import Row from '../Row';
import * as Styled from './Footer.styled';

const Footer = () => {
  return (
    <Styled.Footer>
      <Row justify="space-evenly" align="center">
        <Col xs={12} sm={6}>
          <Styled.LogoFlexDiv direction="column" align="center">
            <Logo dark />
            <p>Everything for your home</p>
          </Styled.LogoFlexDiv>
        </Col>
        <Col xs={12} sm={6}>
          <FlexDiv justify="center">
            <div>
              <Styled.Title>PAGES</Styled.Title>
              <Styled.Links>
                <a href="/">Home</a>
                <a href="/">Products</a>
                <a href="/">Contact</a>
                <a href="/">Abouts us</a>
              </Styled.Links>
            </div>
          </FlexDiv>
        </Col>
      </Row>
      <Styled.Message>Ecommerce created during Wizeline’s Academy React Bootcamp</Styled.Message>
    </Styled.Footer>
  );
};

export default Footer;
