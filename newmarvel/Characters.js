/**a
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Image, ListView} from 'react-native';

export default class Characters extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <TouchableHighlight style={styles.searchButton}>
            <Text>X</Text>
          </TouchableHighlight>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <Text style={styles.characters}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: '#f0141e'
  },
  characters: {
    fontFamily: 'Bebas',
    color: 'white',
    textAlign: 'center',
    paddingBottom: 20
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  searchBar: {
    backgroundColor: '#f0141e',
    borderColor: '#f0141e',
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: 'Bebas',
    height: 25,
    width: 60,
  },
  searchButton: {
    paddingTop: 5
  }
})