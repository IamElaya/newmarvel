/**a
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Navigator, View, Text, TextInput, StyleSheet, ScrollView, TouchableHighlight, Image, ListView} from 'react-native';

import Character from './Character'

var md5 = require('md5');
const PRIVATE_KEY = '9ad87557cac2adae4a2d4870629ee096d2a1c288';
const PUBLIC_KEY = '62b90bff7ee74248f2d2d4717bc4afac';

const LIMIT = 10;

let ts = Date.now();
let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
let characterName = 'Captain';
let REQUEST_URL = 'http://gateway.marvel.com:80/v1/public/characters?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash + '&nameStartsWith=' + characterName + '&limit=' + LIMIT + '&offset=';

export default class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isLoading: false,
      offset: 0,
      loaded: false
    };
  }

  componentDidMount() {
    this._characters = [];
    this.fetchData(this.state.offset);
  }

  fetchData(offset) {
    fetch(REQUEST_URL + offset)
      .then((response) => response.json())
      .then((responseJson) => {
        this._characters = this._characters.concat(responseJson.data.results);

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this._characters),
          loaded: true,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View>
        <View style={styles.navContainer}>
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
        <ScrollView>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderCharacter.bind(this)}
            // onEndReached={this.onEndReached.bind(this)}
            style={styles.listView} />
        </ScrollView>
      </View>
    )
  }

  onPress(character) {
    this.props.navigator.push({
      title: character.name,
      component: Character,
      passProps: {character},
    });
  }

  // onEndReached() {
  //   if (!this.state.isLoading) {
  //     var offset = this.state.offset += LIMIT;
  //     this.setState({
  //       isLoading: true,
  //       offset: offset
  //     });

  //     this.fetchData(this.state.offset);
  //   }
  // }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  renderCharacter(character) {
    let imagePath = character.thumbnail.path + '.' + character.thumbnail.extension;
    return (
      <TouchableHighlight onPress={() => this.onPress(character)}>
        <View style={styles.container}>
          <Image source={{uri: imagePath}} style={styles.thumbnail} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{character.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  navContainer: {
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
  },
  rightContainer: {
    flex: 1,
  },
  listView: {
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#f0141e',
    fontFamily: 'Bebas'
  },
  thumbnail: {
    width: 53,
    height: 81
  },
})