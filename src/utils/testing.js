import Theme from '../styles/Theme';
import ProductCartProvider from '../contexts/ProductCartContext';
import { BrowserRouter } from 'react-router-dom';

export const AppWrapper = ({ children }) => (
  <ProductCartProvider>
    <Theme>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Theme>
  </ProductCartProvider>
);

export const wait = (s) => new Promise((r) => setTimeout(r, s * 1000));