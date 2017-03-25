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
} from 'react-native';
import Login from './app/Login'

export default class JmkProject extends Component {
  render() {
    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('JmkProject', () => JmkProject);
