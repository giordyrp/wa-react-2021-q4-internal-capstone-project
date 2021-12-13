import Home from './';
import { render, screen } from '@testing-library/react';
import { AppWrapper } from '../../utils/testing';
import banners from '../../mocks/en-us/featured-banners.json';
import categories from '../../mocks/en-us/product-categories.json';
import products from '../../mocks/en-us/featured-products.json';

beforeEach(() => {
  render(
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
});

describe('Featured Banners', () => {
  it('renders data from API', async () => {
    const bannerTitle = await screen.findByRole('heading', { name: banners.results[0].data.title });
    expect(bannerTitle).toBeInTheDocument();
  });
});

describe('Carousel', () => {
  it('renders data from API', async () => {
    const categoryName = await screen.findByText(new RegExp(categories.results[0].data.name));
    expect(categoryName).toBeInTheDocument();
  });
});

describe('Featured Products', () => {
  it('renders data from API', async () => {
    const categoryName = await screen.findByText(new RegExp(products.results[0].data.name));
    expect(categoryName).toBeInTheDocument();
  });
});
