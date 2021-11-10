import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          })
        })
      } else {
        this.setState({
          currentUser: null
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
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
}

export default App;
