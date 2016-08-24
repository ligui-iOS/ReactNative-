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
  View
} from 'react-native';
let  RegisterLeaf = require('./RegisterLeaf');
let  WaitingLeaf = require('./WaitingLeaf');
var Dimensions = require('Dimensions');
let  PixelRatio = require('PixelRatio');
let totalWidth = Dimensions.get('window').width;
let  totalHeight = Dimensions.get('window').height;
let  pixelRatio = PixelRatio.get();
class HelloReactNative extends Component {
  constructor(props) {
    super(props);
    this.handleBack=this.handleBack.bind(this);
  }
  configureScene(route) {
    return Navigator.SceneConfigs.FadeToTheEnd;
  }
  renderSene(router, navigator) {
    console.log("renderSene");
    Navigator.navigator = navigator;
    switch (router.name) {
      case "register":
            return < RegisterLeaf navigator={navigator}/>;
      case "waiting":
            return < WaitingLeaf phoneNumber={router.phoneNumber}
                                 userPW={router.userPW}
                                 navigator={navigator}
                />;
    }
  }
  componentDidMount() {
    console.log("componentDidMount");
    BackAndroid.addEventListener('hardwareBackPress',this.handleBack);
  }
  handleBack() {
    const  navigator = Navigator.navigator;
    console.log(navigator);
    if (navigator && navigator.getCurrentRoutes().length > 1){
      navigator.pop();
      return true;
    }
    return false;
  }
  componentWillUnMount() {
    console.log("componentWillUnMount");
    BackAndroid.removeEventListener('hardwareBackPress',this.handleBack);
  }

  render() {
    return (
      <Navigator
          initialRoute={{name:'register'}}
          configureScene={this.configureScene}
          renderScene={touchHistory.renderScene}
          />
    );
  }
}

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
