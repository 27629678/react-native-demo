'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  NativeModules,
  NativeEventEmitter
} from 'react-native';


import NEWebView from './webview';

const {Device} = NativeModules;
const calendarManagerEmitter = new NativeEventEmitter(Device);
const subscription = calendarManagerEmitter.addListener(
  'EventTesting',
  (reminder) => alert(reminder.name)
);

class RNHighScores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  showAlert() {
    this.setState({
      checked: true,
    });

    Device.log('hello, native.');
    Device.constants((error, events) => {
      console.log(events);
    });
  }

randomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

  containerStyle() {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: this.randomColor(),
    }
  }

  render() {
    var contents = this.props["scores"].map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );

    console.log(this.props);

    var title = '2048 High Scores!';
    if (this.state.checked) {
      title = '1024 High Scores!';
    }

    console.log('Hello, World!');
    return (
      <View style={this.containerStyle()}>
        <Text style={styles.highScoresTitle}>
          {title}
        </Text>
        <Text style={styles.scores}>
          {contents}
        </Text>
        <NEWebView url='http://www.bing.com' style={styles.webview}/>
        <Button onPress={this.showAlert.bind(this)} title='Alert'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    textDecorationLine:'line-through',
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  webview: {
    width:320,
    height:200,
  }
});

// Module name
AppRegistry.registerComponent('AwesomeProject', () => RNHighScores);
