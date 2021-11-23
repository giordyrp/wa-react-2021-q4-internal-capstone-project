import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ProductList from '../../components/ProductList';
import categoriesData from '../../mocks/en-us/product-categories.json';
import Section from '../../components/Section';
import Row from '../../components/Row';
import Col from '../../components/Col';
import ProductCategoryFilter from '../../components/ProductCategoryFilter';
import useProducts from '../../hooks/useProducts';

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const products = useProducts();

  const onSelectCategory = (categoryId) => {
    let newSelectedCategories = [...selectedCategories];
    if (selectedCategories.includes(categoryId)) {
      newSelectedCategories = selectedCategories.filter((category) => category !== categoryId);
    } else {
      newSelectedCategories.push(categoryId);
    }
    products.getProducts(newSelectedCategories);
    setSelectedCategories(newSelectedCategories);
  };

  return (
    <Layout>
      <Section title="Products">
        <Row>
          <Col xs={12} sm={3}>
            <ProductCategoryFilter
              categories={categoriesData}
              selected={selectedCategories}
              onSelect={onSelectCategory}
            />
          </Col>
          <Col xs={12} sm={9}>
            <ProductList products={products.data} loading={products.loading} />
          </Col>
        </Row>
      </Section>
    </Layout>
  );
};

export default Products;
