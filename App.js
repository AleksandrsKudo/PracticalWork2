import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/favicon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.txtcontainer}>
        <Text style={styles.titleText}>Hello World from Group 12. : Reinis Lūkins!</Text>
        <Text style={styles.bottomText}>This is my Reinis Lūkins first React Native application!</Text>
      </View>

      <View style={styles.imgcontainer}>
        <Image style={styles.logo} source={logo}/>
      </View>
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
    fontWeight: "bold",
  },
  bottomText: {
    marginTop: 20,
    alignSelf: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  imgcontainer: {
    flex: 3,
    //backgroundColor: '#FEDCBA',
    justifyContent: 'center'
  },
  txtcontainer: {
    flex: 2,
    //backgroundColor: '#ABCDEF',
    justifyContent: 'center'
  }

});