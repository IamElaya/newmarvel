/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator
} from 'react-native';

import Characters from './Characters'

export default class newmarvel extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{title: 'Marvel', index: 0}}
        renderScene={(route, navigator) =>
          <Characters
            title={route.title}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  welcome: {
    color: '#f0141e',
    fontFamily: 'Bebas',
    fontSize: 15,
    margin: 10,
    paddingTop: 20,
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#f0141e',
    marginBottom: 5,
    fontFamily: 'Bebas'
  },
  marvel: {
    color: 'white'
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20
  },
  header: {
    color: '#f0141e',
    fontFamily: 'Bebas',
    alignSelf: 'flex-start',
    fontSize: 20
  },
  searchBar: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: 'Bebas',
    height: 30,
    width: 100,
    paddingLeft: 5
  }
});

AppRegistry.registerComponent('newmarvel', () => newmarvel);
