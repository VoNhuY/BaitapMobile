import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

interface StopWatchProps { }

interface StopWatchState {
  timeElapsed: number | null;
  running: boolean;
  startTime: Date | null;
  laps: number[];
  interval?: NodeJS.Timeout;
}

export default class StopWatch extends Component<StopWatchProps, StopWatchState> {
  constructor(props: StopWatchProps) {
    super(props);
    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: [],
    };
    this.handleStartPress = this.handleStartPress.bind(this);
    this.startStopButton = this.startStopButton.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  formatTime(milliseconds: number): string {
    let minutes = Math.floor(milliseconds / 60000);
    milliseconds %= 60000;
    let seconds = Math.floor(milliseconds / 1000);
    milliseconds %= 1000;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds < 100 ? '0' : ''}${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  }

  laps() {
    return this.state.laps && this.state.laps.map((time: number, index: number) => (
      <View key={index} style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {this.formatTime(time)}
        </Text>
      </View>
    ));
  }

  startStopButton() {
    var style = this.state.running ? styles.stopButton : styles.startButton;
    return (
      <TouchableHighlight underlayColor="green" onPress={this.handleStartPress} style={[styles.button, style]}>
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight >

    );

  }

  lapButton() {
    return (
      <TouchableHighlight style={styles.button} underlayColor="pink" onPress={this.handleLapPress}>
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    );
  }

  handleLapPress() {
    var lap = this.state.timeElapsed as number;
    this.setState({
      //startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  }

  handleStartPress() {
    if (this.state.running) {
      clearInterval(this.state.interval as NodeJS.Timeout); // Sử dụng clearInterval
      this.setState({ running: false });
      return;
    }
    this.setState({ startTime: new Date() });

    const interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date().getTime() - (this.state.startTime as Date).getTime(),
        running: true
      });
    }, 30);
    this.setState({ interval }); // Lưu trữ interval vào state
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              {this.formatTime(this.state.timeElapsed as number)}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            {this.lapButton()}
            {this.startStopButton()}
          </View>
        </View>
        <View style={styles.footer}>
          {this.laps()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  header: {
    flex: 1

  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 10
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'

  },
  timer: {
    fontSize: 60
  },
  lapText: {
    fontSize: 30,
  },
  startButton: {
    borderColor: 'green'
  },
  stopButton: {
    borderColor: 'red'

  }
});
AppRegistry.registerComponent('StopWatch', () => StopWatch);
