import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      startTime: null,
      timeElapsed: null,
      laps: [],
      lastLapTime: 0
    }
    this.handleStartStopPress = this.handleStartStopPress.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
  }

  handleStartStopPress() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false, laps: [], lastLapTime: 0});
      return;
    }

    this.setState({startTime: new Date()});

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      })
    }, 30);
  }

  handleLapPress() {
    let lap = this.state.timeElapsed - this.state.lastLapTime;
    if (this.state.running) {

      console.log('Pressed Lap');
      this.setState({
        laps: this.state.laps.concat([lap]),
        lastLapTime: this.state.timeElapsed
      })
      console.log(this.state.laps);
    }
  }

  render() {
    var borderColor = this.state.running ? styles.stopButton : styles.startButton;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableHighlight style={styles.button} underlayColor='gray' onPress={this.handleLapPress}>
              <Text>Lap</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.button, borderColor]} underlayColor='gray' onPress={this.handleStartStopPress}>
              <Text>
                {this.state.running ? 'Stop' : 'Start'}
              </Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.footer}>
          {this.state.laps.map((lap, index) => {
            return <View style={styles.lap} key={index}>
              <Text style={styles.lapText}>Lap {index+1}</Text>
              <Text style={styles.lapText}>{formatTime(lap)}</Text>
            </View>
          })}
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
    borderWidth: 3,
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
  },
  startButton: {
    borderColor: 'green'
  },
  stopButton: {
    borderColor: 'red'
  }
});

AppRegistry.registerComponent('Stopwatch', () => Stopwatch);
