/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import {Button, Switch, Chip, Avatar, Surface} from 'react-native-paper';

const imatge = require('./assets/elmo.jpg');

const App = () => {
  const [estatSwitch, setEstatSwitch] = useState(false);
  const [isWifiActive, setIsWifiActive] = useState(false);

  const handleWifiPress = () => {
    setIsWifiActive(!isWifiActive);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <StatusBar />
        <ImageBackground source={imatge} style={styles.image}>
          <Text style={styles.sectionTitle}>2DAM</Text>
        </ImageBackground>
        <Text style={styles.title2}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="Introdueix el teu email..."
          keyboardType="email-address"
        />
        <Text style={styles.title2}>BUTTONS</Text>
        <Button
          style={styles.button}
          mode="text"
          icon={'fire'}
          buttonColor="#fe9f2b">
          Elmo
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          icon={'fire'}
          buttonColor="#fe9f2b">
          Elmo
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          icon={'fire'}
          buttonColor="#fe9f2b">
          Elmo
        </Button>
        <Button
          style={styles.button}
          mode="elevated"
          icon={'fire'}
          buttonColor="#fe9f2b">
          Elmo
        </Button>
        <Button mode="contained-tonal" icon={'fire'} buttonColor="#fe9f2b">
          Elmo
        </Button>
        <Text style={styles.title2}>Fem un descans?</Text>
        <Switch
          value={estatSwitch}
          color="#fe9f2b"
          onValueChange={() => setEstatSwitch(!estatSwitch)}></Switch>
        <Surface style={styles.surface} mode="elevated">
          <Button mode="contained-tonal" icon={'fire'} buttonColor="#fe9f2b">
            Elmo
          </Button>
        </Surface>
        <Text style={styles.title2}>CHIPS</Text>
        <View style={styles.chipContainer}>
          <Chip style={styles.chip} icon="web" onPress={() => console.log('Pressed')}>
            Internet
          </Chip>
          <Chip
            style={styles.chip} 
            icon={({size, color}) => (
              <Avatar.Icon
                size={size}
                color={isWifiActive ? '#fe9f2b' : 'white'}
                icon="wifi"
              />
            )}
            onPress={handleWifiPress}>
            <Text style={{color: isWifiActive ? '#fe9f2b' : 'black'}}>
              Wi-Fi
            </Text>
          </Chip>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'justify',
    color: 'black',
    padding: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: 'white',
    padding: 10,
  },
  button: {
    marginBottom: 10,
  },
  surface: {
    backgroundColor: 'black',
    marginTop: 20,
    marginBottom: 20,
  },
  chipContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chip: {
    padding: 10,
    marginRight:10,
    marginLeft:10,
    marginTop: 20,
    marginBottom: 20,
  }
});

export default App;
