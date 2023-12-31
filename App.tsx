/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';


const App = () => {

  return (
    <View>
      <StatusBar/>
      <Text style={styles.sectionTitle}>H</Text>
    </View>
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
