import React from 'react';
import Layout from '../../components/Layout';
import Slider from '../../components/Slider';
import Carousel from '../../components/Carousel';
import CategoryCard from '../../components/CategoryCard';
import banners from '../../mocks/en-us/featured-banners.json';
import categories from '../../mocks/en-us/product-categories.json';
import featuredProducts from '../../mocks/en-us/featured-products.json';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <Layout>
      <Slider banners={banners} />
      <Carousel title="Categories" elements={categories} elementName="category" card={CategoryCard}/>
      <FeaturedProducts products={featuredProducts} />
    </Layout>
  );
};

export default Home;
