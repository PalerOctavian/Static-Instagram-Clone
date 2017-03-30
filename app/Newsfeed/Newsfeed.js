import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import NewsfeedStory from './NewsfeedStory'
import NewsfeedPost from './NewsfeedPost'
import SuggestionsCarousel from './Suggestions'
export default class Newsfeed extends Component {
  render(){
    return(
      <View style={{flex:1}}>
        <NewsfeedBanner/>
        <View style={{flex:1, flexDirection: 'column',}}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <NewsfeedStory />
            <NewsfeedPost/>
            <NewsfeedPost/>
            <NewsfeedPost/>
            <SuggestionsCarousel/>
            <NewsfeedPost/>
          </ScrollView>
        </View>
     </View>
    )
  };
}

class NewsfeedBanner extends Component {
  render(){
    return(
      <View style={{flexDirection:'row', height:50,alignItems:'center',justifyContent:'space-between', borderBottomWidth:1, borderBottomColor: 'rgba(0,0,0,0.15)'}}>
        <Image style={{marginLeft: 10, height:23, width: 23}} source={require('./camera.png')}/>
        <Image style={{marginRight: 10, height:23, width: 23}}source={require('./PostIcons/share.png')}/>
      </View>
    )
  };
}
