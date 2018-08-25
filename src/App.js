import store from './store';
import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import WelcomePageContainer from './components/WelcomePageContainer';
import { Route } from 'react-router-dom';
import GameContainer from './components/GameContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
      <Route exact path="/" component={WelcomePageContainer} />
      <Route exact path="/hangman" component={GameContainer} />
      </div>
      </Provider>
    );
  }
}

export default App;