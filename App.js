import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/favicon.png')} />
      <Text>Hello World</Text>
      <Text>Hello World from group 12</Text>
      <Text>Member: Daniela Dupusa - Mezgaile</Text>
      <Text>Ths is my, Daniela Dupusa - Mezgaile, first React Native application!</Text>
      <Text>Nice to see you here.</Text>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
