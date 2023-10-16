/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider, TextInput, Button} from 'react-native-paper';

const arrayTxtInput = ['Email', 'Nom'];

const isAdmin = true;

const estil = {
  backgroundColor: 'purple',
  fontSize: 10,
  fontWeight: '600',
  padding: 4,
  paddingLeft: 12,
  textAlign: 'left',
  color: 'grey',
};

const moduls2Dam = [
  { nom: 'DIN', professor: 'Manel', hores: 120 },
  { nom: 'ADA', professor: 'Roberto', hores: 120 },
  { nom: 'PMDM', professor: 'Paco', hores: 100 },
  { nom: 'PSP', professor: 'Roberto', hores: 60 },
  { nom: 'SGE', professor: 'Belén', hores: 100 },
  { nom: 'Anglés', professor: 'Caterina', hores: 40 },
  { nom: 'EIE', professor: 'Ana', hores: 60 },
];

const Boto = () => {
  return (<Button textColor='white' icon={'format-list-bulleted'} style= {styles.boto}>INFORMES</Button>);
}

const Nom = () => {
  return (<Text style={styles.sectionTitle}>Laia Clemente Crespo</Text>);
};

const Dades = arr => {
  return (arr.map(elem => <TextInput placeholder={elem} textColor='orange' placeholderTextColor='orange' style={estil} />));
};

const Seccions = () => {
  return moduls2Dam.map((modul, index) => (
    <View style={(index % 2 === 0) ? styles.seccioOscura : styles.seccioClara} key={index}>
      <Text>{index + 1}</Text>
      <Text>{modul.nom}</Text>
      <Text>{modul.professor}</Text>
      <Text>{modul.hores} hores</Text>
    </View>
  ));
}


const App = () => {
  return (
    <Provider>
      <StatusBar />
      {Nom()}
      {Dades(arrayTxtInput)}
      {isAdmin && Boto()}
      {Seccions()}
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    
  },
  seccioClara: {
    backgroundColor: '#F8BBD0',
  },
  seccioOscura: {
    backgroundColor: '#F48FB1'
  },
  boto: {
    backgroundColor: '#6200ee',
    color: 'white',
  },
});

export default App;
