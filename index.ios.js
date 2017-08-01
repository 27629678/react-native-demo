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

const {Device} = NativeModules;
const calendarManagerEmitter = new NativeEventEmitter(Device);
const subscription = calendarManagerEmitter.addListener(
  'EventTesting',
  (reminder) => alert(reminder.name)
);

class RNHighScores extends React.Component {
  showAlert() {
    Device.log('hello, native.');
    Device.constants((error, events) => {
      alert(events);
    });
  }

  render() {
    var contents = this.props["scores"].map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          2048 High Scores!
        </Text>
        <Text style={styles.scores}>
          {contents}
        </Text>
        <Button onPress={this.showAlert} title='Alert'/>
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
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// Module name
AppRegistry.registerComponent('AwesomeProject', () => RNHighScores);
