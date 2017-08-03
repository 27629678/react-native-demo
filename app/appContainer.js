import React, { Component } from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

class AppContainer extends Component {

  render() {
    return <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:64
  },
});

export default AppContainer
