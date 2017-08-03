'use strict';

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import AppContainer from './app/appContainer'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './app/reducer'

const store = createStore(reducer);

class App extends Component {

  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>
  }
}

// Module name
AppRegistry.registerComponent('AwesomeProject', () => App);
