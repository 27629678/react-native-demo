import React, { Component } from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

import HeaderContainer from './components/header'
import BodyContainer from './components/body'
import Footer from './components/footer'

class AppContainer extends Component {

  render() {
    return <View style={styles.container}>
      <HeaderContainer />
      <BodyContainer />
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
