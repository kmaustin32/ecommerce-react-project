import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/shop'>
          <ShopPage />
        </Route>
        <Route exact path='/signin'>
          <SignInSignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
