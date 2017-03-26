import React, {Component} from 'react';
import{
  View,
  ScrollView,
} from 'react-native';
import NewsfeedStory from '../Newsfeed/NewsfeedStory';

export default class Search extends Component {
  render(){
    return(
      <View style={{marginTop: 50, flex:1, flexDirection: 'column'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <NewsfeedStory/>
        </ScrollView>
      </View>
    )
  };
}
