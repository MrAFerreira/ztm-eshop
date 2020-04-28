import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shop.component';
import Authentication from './views/authentication/authentication.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/authentication" component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
