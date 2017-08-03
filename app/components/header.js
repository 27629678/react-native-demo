import React from 'react'
import {
  View,
  TextInput,
  Button,
  Switch,
  StyleSheet,
} from 'react-native'

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
          value={this.state.text}
          autoCorrect={false}
          >
        </TextInput>
      </View>

      <Button
       title='ADD'
       onPress={() => {console.log(this.state.text);} }
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

export default Header
