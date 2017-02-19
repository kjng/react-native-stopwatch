import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Stopwatch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>00:00.00</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableHighlight style={styles.button} underlayColor='gray' onPress={()=>{console.log('pressed lap')}}>
              <Text>Lap</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor='gray' onPress={()=>{console.log('pressed start')}}>
              <Text>Start</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.lap}>
            <Text style={styles.lapText}>Lap 1</Text>
            <Text style={styles.lapText}>00:00.00</Text>
          </View>
          <View style={styles.lap}>
            <Text style={styles.lapText}>Lap 2</Text>
            <Text style={styles.lapText}>00:00.00</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue'
  },
  timer: {
    fontSize: 50
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lap: {
    backgroundColor: 'azure',
    padding: 10,
    marginTop: 10,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('Stopwatch', () => Stopwatch);
