import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './views/homepage/homepage.component';
import ShopPage from './views/shop/shop.component';
import Authentication from './views/authentication/authentication.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/authentication" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
