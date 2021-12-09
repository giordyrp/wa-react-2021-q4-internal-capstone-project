import React from 'react';
import Home from '../Home';
import Products from '../Products';
import Product from '../Product';
import Search from '../Search';
import GlobalStyle from '../../styles/GlobalStyle';
import Theme from '../../styles/Theme';
import { Switch, Route, Redirect } from 'react-router-dom';


const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/product/:id" component={Product}/>
        <Route path="/products" component={Products}/>
        <Route path={['/', 'home']} exact component={Home}/>
        <Redirect to="/"/>
      </Switch>
    </Theme>
  );
};

export default App;
