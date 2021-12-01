import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/favicon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hello World from Group 12. : Reinis Lūkins!</Text>
      <Text>This is my Reinis Lūkins first React Native application!</Text>
      <Image source={logo}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});