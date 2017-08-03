'use strict';

import React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

class Footer extends React.Component {

  render() {
    return <View style={styles.container}>
      <View style={styles.h_stack}>
        <Text>footer</Text>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:60,
    backgroundColor: 'lightgray',
  },

  h_stack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Footer
