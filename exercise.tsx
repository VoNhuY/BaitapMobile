/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {useState} from 'react';
import React from 'react';
import type {PropsWithChildren} from 'react';
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


function exercise(): React.JSX.Element {


  return (
    <View>
        <View>
            <View>styles.item, backgroundColor:'red',  <View/>
            <View>styles.item, backgroundColor:'green'<View/>

        <View/>
        <View>
            <View>styles.item, backgroundColor:'blue'<View/>
            <View>styles.item, backgroundColor:'pink'<View/>

        <View/>
    <View/>

  );
}

const styles = StyleSheet.create({

});


export default exercise;