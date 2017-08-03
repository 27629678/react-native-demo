'use strict';

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { connect } from 'react-redux'

class Body extends React.Component {
  render() {
    return <View style={styles.container}>
      <View style={styles.h_stack}>
        <Text>
          {this.props.content}
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});

const mapStateToProps = state => {
  return {
    content: state.content,
  }
}

const BodyContainer = connect(mapStateToProps)(Body);

export default BodyContainer
