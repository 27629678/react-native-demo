'use strict';

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import AppContainer from './app/appContainer'

class App extends Component {

  render() {
    return <AppContainer />
  }
}

// Module name
AppRegistry.registerComponent('AwesomeProject', () => App);
