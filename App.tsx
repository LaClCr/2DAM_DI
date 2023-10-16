/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider as PaperDelWater} from 'react-native-paper';

const Saluda = (nom, text) => {
  return(
    <View><Text style={styles.sectionTitle}>{text}</Text>
    <Text style={styles.sectionTitle}>{nom}</Text></View>);
}
const App = () => {

  let esticLoguejat = false;
  const alumnes = ['Laia', 'Sergi', 'Marcel'];

  return (
    <PaperDelWater>
      <StatusBar/>
      {alumnes.map((alum, index) => {
        return (Saluda(index+" "+alum,"Benvingut/da"));
      })}
    </PaperDelWater>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign:'center',
  },
});

export default App;
