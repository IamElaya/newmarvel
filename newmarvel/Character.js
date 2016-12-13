'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Character extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style ={styles.text}>{this.props.character.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 60,
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  }
});
