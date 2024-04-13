
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


function StopWatch2(): React.JSX.Element {
  return (
    <View style={styles.container}>
        <View style = {styles.containerTop}> 
            <Text style = {styles.textName}>VIN GROUP </Text>
            <Text style = {styles.textIndex}>8.700 </Text>
        </View>
        <View style = {styles.containerBottom}>
            <View style = {styles.button}> </View>    
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
 
  },
  containerTop: {
    flex: 1,
    backgroundColor: 'yellow'

  },
  textName:{
    fontSize: 80,

  },
  textIndex: {
    fontSize: 40,
  },
  containerBottom:{
    flex: 1,
    backgroundColor: 'pink'
  },
  button: {

  }
});


export default StopWatch2;