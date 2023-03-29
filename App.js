import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import PostContainer from './PostContainer';
import PhotoViewer from './PhotoViewer';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const imgWall = require('./images/wall.png');
const imgPetra = require('./images/petra.png');
const imgRedeemer = require('./images/redeemer.png');
const imgMachu = require('./images/machu.png');
const imgChichen = require('./images/chichen.png');
const imgColosseum = require('./images/colosseum.png');
const imgTaj = require('./images/taj.png');

const timeline = [
  { title: 'Great Wall of China', image: imgWall },
  { title: 'Petra', image: imgPetra },
  { title: 'The Redeemer', image:  imgRedeemer },
  { title: 'Machu Picchu', image: imgMachu },
  { title: 'Chichen Itza', image: imgChichen },
  { title: 'Colosseum', image: imgColosseum },
  { title: 'Taj Mahal', image: imgTaj },
];

export default class App extends Component {
  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  renderViewer() {
    const { selected, position } = this.state;

    if (selected) {
      return (
        <PhotoViewer
          post={selected}
          position={position}
          onClose={this.closeViewer}
        />
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.toolbar}>Seven Wonders of the World</Text>
        <ScrollView style={styles.content}>
        {
          timeline.map((post, index) =>
            <PostContainer key={index} post={post}
            onPress={this.showImage} />
          )
        }
        </ScrollView>
        {this.renderViewer()}
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});