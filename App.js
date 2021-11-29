import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  },
  textStyle: {
    fontWeight: "bold"
  },
  logo: {
    width: 100,
    height: 100,
  }
})

const Hello = () => {
  return (
    <View style={[styles.center, { top: 200 }]}>

      <Text>Hello World from Group 12 </Text>

      <Text>
        <Text>Member: </Text>
        <Text style={styles.textStyle}>Aleksandrs Kudo{'\n'}{'\n'} </Text>
      </Text>
      <Text> This is my Aleksandrs Kudo {'\n'} first React Native application!{'\n'}{'\n'}</Text>
      <Image style={styles.logo}
        source=
        {require('./assets/images.png')} />
    </View >

  )
}
export default Hello;
