import React, { useLayoutEffect, useState } from 'react';
import Col from '../../components/Col';
import Row from '../../components/Row';
import * as Styled from './ProductDetail.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';
import Section from '../Section';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from 'react-image-gallery';
import { useTheme } from 'styled-components';

const ProductDetail = ({ product }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const theme = useTheme();

  const {
    tags,
    data: {
      name,
      sku,
      images,
      category: { slug: categoryName },
      price,
      description,
      specs,
    },
  } = product;

  const imageList = images.map(image => ({
      original: image.image.url,
      thumbnail: image.image.url,
  }));

  const setThumbnailPosition = () => {
    return parseInt(theme.breakpoints.sm.replace('px', '')) > windowWidth ? 'bottom' : 'left';
  };

  useLayoutEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <>
        <Section>
        <Row>
          <Col xs={12} md={7}>
            <ImageGallery items={imageList} thumbnailPosition={setThumbnailPosition()} showBullets={false} showPlayButton={false} showFullscreenButton={false} />
          </Col>
          <Col xs={12} md={5}>
            <Styled.Category>{categoryName}</Styled.Category>
            <Styled.Name>{name}</Styled.Name>
            <Styled.SKU>SKU: {sku}</Styled.SKU>
            <FlexDiv wrap="wrap">
              {tags.map((tag) => (
                <Styled.Tag key={tag}>{tag}</Styled.Tag>
              ))}
            </FlexDiv>
            <FlexDiv justify="space-between" align="center">
              <Styled.Price>${price}</Styled.Price>
              <div>
                <Styled.CountButton icon={<FontAwesomeIcon icon={faMinus} />} />
                <Styled.Count value={1} color="number" onChange={() => {}} />
                <Styled.CountButton icon={<FontAwesomeIcon icon={faPlus} />} />
              </div>
            </FlexDiv>
            <Styled.ActionsFlexDiv justify="space-between" align="center">
              <Styled.ActionButton color="white" size="large" icon={<FontAwesomeIcon icon={faCartPlus} />}>Add to Cart</Styled.ActionButton>
              <Styled.ActionButton color="primary" size="large">Buy Now</Styled.ActionButton>
            </Styled.ActionsFlexDiv>
          </Col>
        </Row>
          <h3>Description</h3>
          <p>{description[0].text}</p>
          <h3>Specifications</h3>
          <Styled.SpecsTable>
            <tbody>
            {specs.map(spec => <tr key={spec.spec_name}>
              <td>{spec.spec_name}</td>
              <td>{spec.spec_value}</td>
            </tr>)}</tbody>
          </Styled.SpecsTable>
        </Section>
    </>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetail;
