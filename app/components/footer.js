'use strict';

import React from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native'

import { connect } from 'react-redux'
import {set_seprator} from '../actions'

class Footer extends React.Component {

  render() {
    return <View style={styles.container}>
      <View style={styles.v_stack}>
        <View style={styles.h_stack}>
          <Text>当前已选择分隔符号：{this.props.seprator}</Text>
        </View>

        <View style={styles.h_stack}>
          <Button title='    +    ' onPress={()=>{this.props.onBtnClick('+')}} />
          <Button title='    -    ' onPress={()=>{this.props.onBtnClick('-')}} />
          <Button title='    &    ' onPress={()=>{this.props.onBtnClick('&')}} />
        </View>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:80,
    backgroundColor: 'lightgray',
  },

  v_stack: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  h_stack: {
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

const mapStateToProps = state => {
  return {
    seprator: state.seprator,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBtnClick: seprator => dispatch(set_seprator(seprator))
  }
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer
