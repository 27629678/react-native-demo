'use strict';

/* ******************************************
 *
 * TextInput与TextField的渲染结果不一样
 *
 * ******************************************/

import React from 'react'
import {
  View,
  TextInput,
  Button,
  Switch,
  StyleSheet,
} from 'react-native'

import { connect } from 'react-redux'

import {add_content} from '../actions'

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = { text: ''}
  }

  onTextChange(text) {
    this.setState({
      text: text
    });
  }

  render() {
    return <View style={styles.container}>
      <View style={styles.textSection} >
        <TextInput
          placeholder='input'
          style={styles.textInput}
          onChangeText={this.onTextChange.bind(this)}
          value={ this.state.text }
          placeholder={this.props.text}
          autoCorrect={false}
          >
        </TextInput>
      </View>

      <Button
       title='ADD'
       onPress={() => {
         this.setState({
           text:''
         });
         this.props.onAddBtnClick(this.state.text);
       } }
       style={styles.searchBtn}
       />
    </View>
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgray'
  },

  textSection: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },

  textInput: {
    flex: 1,
    backgroundColor:'white'
  },

  searchBtn: {
    flex: 0.3,
  },
});

const mapStateToProps = state => {
  return { text: state.text };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddBtnClick: text => {
      dispatch(add_content(text));
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
