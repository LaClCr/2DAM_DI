import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
  sectionTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  dades: {
    fontSize: 20,
    color: 'black',
  },
  textInput: {
    margin: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
  },
  sectionData: {
    flex: 2,
  },
  sectionDataConcrete: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionDataText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionCalcula: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 20,
  },
  sectionResult: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
