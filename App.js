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
  View,
  Image,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false,
      style: {
        backgroundColor: '#000',
      },
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    let graphic = {
      uri: 'https://images.genius.com/058b6018520093618e4c4d249e31bc35.794x794x1.jpg'
    };
    return (
      <View style={styles.splashContainer}>
        <Image source={graphic} style={styles.graphic}/>
        <Button
          color='#333'
          accessibilityLabel='About'
          onPress={() => navigate('About')}
          title="About"
        />
      </View>
    );
  };
}

class AboutScreen extends Component {
  static navigationOptions = {
    title: 'About',
    header: {
      style: {
        backgroundColor: '#000',
      },
      titleStyle: {
        color: '#fff',
      },
      tintColor: '#fff',
      backTitle: 'Back',      
    },
  };
  render() {
    return (
      <View style={styles.aboutContainer}>
        <View>
          <Text style={styles.aboutText}>Memento Mori is a latin expression which translates into "remember that you have to die", or more simply "remember death". It, as well as skull and bone imagery, have been used since Ancient Rome as a reminder of one's own mortality, and offer a reminder to contemplate this regularly.</Text>
          <Text style={styles.aboutText}>You can learn more about the origins of the phrase here: https://en.wikipedia.org/wiki/Memento_mori</Text>
        </View>
        <View>
          <Text style={styles.footerText}>This app is a simple React Native learning project by Myles Tan. Code is online and open-source. Follow me on github @tanmyles. Made with love in the 6ix.</Text>
        </View>
      </View>
    );
  };
}

const MementoMori = StackNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutScreen },
});

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  graphic: {
    width: 200,
    height: 200
  },
  tagline: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 100,
    margin: 10
  },
  aboutContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  aboutTitle: {
    color: '#fff',
    fontSize: 18,
  },
  aboutText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  footerText: {
    color: '#999',
    fontSize: 12,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MementoMori', () => MementoMori);
