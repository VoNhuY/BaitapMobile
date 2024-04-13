
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { useState } from 'react';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Switch
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (

    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}> Bottom Right</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}> Bottom Right</Text>
        </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'

  },
  containerTop: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: 'pink',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',


  },
  centerText: {
    textAlign: 'right',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',

  },
  containerBottom: {
    flex: 1,

  },
  bottom: {
    marginTop: 40,
    marginHorizontal: 40,
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8

  },
  bottomText: {
    textAlign: 'right',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',

  },
  top: {
    marginTop: 40,
    marginHorizontal: 40,
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
  },
  topText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  }
});


export default App;