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
  Navigator,
  Image,
} from 'react-native';
import Login from './app/Login';
import Register from './app/register/Register';
import Newsfeed from './app/Newsfeed/Newsfeed';
import Search from './app/Search/Search';
import Notification from './app/Notifications/Notifications';
import Add from './app/Add/Add';
import {Scene, Router} from 'react-native-router-flux';


const HomeIcon = () => {
  return(
    <Image style={style.icon} source={require('./app/Newsfeed/home24.png')}/>
  )
}

const SearchIcon = ({title}) => {
  return(
    <Image style={style.icon} source={require('./app/Newsfeed/search24.png')}/>
  )
}

const AddIcon = ({title}) => {
  return(
    <Image style={style.icon} source={require('./app/Newsfeed/add24.png')}/>
  )
}

const NotificationsIcon = ({title}) => {
  return(
    <Image style={style.icon} source={require('./app/Newsfeed/notifications24.png')}/>
  )
}

const ProfileIcon = ({title}) => {
  return(
    <Image style={style.icon} source={require('./app/Newsfeed/profile24.png')}/>
  )
}

export default class JmkProject extends Component {
  render() {
    return (
      <Router>
        <Scene key="login" component={Login} hideNavBar={true}/>
        <Scene key="register" component={Register} hideNavBar={true}/>
        <Scene key="newsfeed" tabs={true} tabBarStyle={style.tabBar}>
          <Scene key="home" icon={HomeIcon} component={Newsfeed} hideNavBar={true}/>
          <Scene key="search"icon={SearchIcon} component={Search} hideNavBar={true}/>
          <Scene key="add" icon={AddIcon} component={Add} hideNavBar={true}/>
          <Scene key="notifications" icon={NotificationsIcon} component={Notification} hideNavBar={true}/>
          <Scene key="profile" icon={ProfileIcon} component={Add} hideNavBar={true}/>
        </Scene>
      </Router>
    );
  }


}

const style = StyleSheet.create({
  icon: {
    opacity: 0.4,
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth:1,
    height:50,
    borderTopColor: 'rgba(0,0,0,0.15)',
  },
});

AppRegistry.registerComponent('JmkProject', () => JmkProject);
