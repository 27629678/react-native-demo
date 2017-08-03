'use strict';

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class Body extends React.Component {
  render() {
    return <View style={styles.container}>
      <View style={styles.h_stack}>
        <Text>
          A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
        </Text>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D2C3F8',
  },

  h_stack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Body
