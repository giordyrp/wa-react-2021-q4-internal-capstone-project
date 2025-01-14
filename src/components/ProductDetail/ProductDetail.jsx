import React, { useContext, useLayoutEffect, useState } from 'react';
import Col from '../../components/Col';
import Row from '../../components/Row';
import * as Styled from './ProductDetail.styled';
import PropTypes from 'prop-types';
import FlexDiv from '../FlexDiv';
import Section from '../Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ImageGallery from 'react-image-gallery';
import { useTheme } from 'styled-components';
import { ProductCartContext } from '../../contexts/ProductCartContext';
import CartProductCount from '../CartProductCount';

const ProductDetail = ({ product }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [countToBuy, setCountToBuy] = useState(1);
  const theme = useTheme();
  const { cart, addProductToCart, removeProductFromCart, setProductCountFromCart } = useContext(ProductCartContext);

  const {
    id,
    tags,
    data: {
      name,
      sku,
      images,
      category: { slug: categoryName },
      price,
      description,
      specs,
      stock,
    },
  } = product;

  const cartProduct = cart.find((cartProduct) => cartProduct.id === id);

  const imageList = images.map((image) => ({
    original: image.image.url,
    thumbnail: image.image.url,
  }));

  const setThumbnailPosition = () => {
    return parseInt(theme.breakpoints.sm.replace('px', '')) > windowWidth ? 'bottom' : 'left';
  };

  const validateStock = () => {
    const productFromCart = cart.find((product) => product.id === id);
    let count = countToBuy;
    if (productFromCart) {
      count += productFromCart.count;
    }
    return count <= stock;
  };

  const onAddToCart = () => {
    addProductToCart(id, countToBuy);
  };

  const onRemoveFromCart = (id) => {
    setCountToBuy(1);
    removeProductFromCart(id);
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
              <CartProductCount
                count={cartProduct ? cartProduct.count : countToBuy}
                setCount={cartProduct ? setProductCountFromCart : setCountToBuy}
                removeProduct={onRemoveFromCart}
                stock={stock}
                id={id}
                inCart={cartProduct ? true : false}
              />
            </FlexDiv>
            <Styled.ActionsFlexDiv justify="space-between" align="center">
              <Styled.ActionButton
                color="white"
                size="large"
                icon={<FontAwesomeIcon icon={cartProduct ? faTrash : faCartPlus} />}
                onClick={cartProduct ? () => onRemoveFromCart(id) : onAddToCart}
                disabled={countToBuy === 0 || !validateStock()}
              >
                {cartProduct ? 'Remove from' : 'Add to'} Cart
              </Styled.ActionButton>
              <Styled.ActionButton color="primary" size="large" disabled={countToBuy === 0 || !validateStock()}>
                Buy Now
              </Styled.ActionButton>
            </Styled.ActionsFlexDiv>
            {stock === 0 && <Styled.UnavailableMessage>Producto no disponible</Styled.UnavailableMessage>}
          </Col>
        </Row>
        <h3>Description</h3>
        <p>{description[0].text}</p>
        <h3>Specifications</h3>
        <Styled.SpecsTable>
          <tbody>
            {specs.map((spec) => (
              <tr key={spec.spec_name}>
                <td>{spec.spec_name}</td>
                <td>{spec.spec_value}</td>
              </tr>
            ))}
          </tbody>
        </Styled.SpecsTable>
      </Section>
    </>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetail;
