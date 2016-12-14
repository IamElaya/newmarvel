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
  Navigator,
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
});

AppRegistry.registerComponent('newmarvel', () => newmarvel);
