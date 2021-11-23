import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import * as Styled from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <Styled.Layout>
      <div>
        <Header />
      </div>
      <Styled.Content>{children}</Styled.Content>
      <div>
        <Footer />
      </div>
    </Styled.Layout>
  );
};

export default Layout;
