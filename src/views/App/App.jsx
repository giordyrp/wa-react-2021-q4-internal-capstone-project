import React, { useContext } from 'react';
import Home from '../Home';
import Products from '../Products';
import GlobalStyle from '../../styles/GlobalStyle';
import Theme from '../../styles/Theme';
import { RouterContext } from '../../contexts/routerContext';

const routes = {
  '/': Home,
  '/products': Products,
};

const App = () => {
  const { route } = useContext(RouterContext);
  const Component = routes[route];

  return (
    <Theme>
      <GlobalStyle />
      <Component />
    </Theme>
  );
};

export default App;
