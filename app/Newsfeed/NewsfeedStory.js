import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class NewsfeedStory extends Component{
  render(){
    return(
      <View style={style.main}>
      <Carousel
        ref={'carousel'}
        sliderWidth={30}
        itemWidth={30}
        showsHorizontalScrollIndicator={false}
        inactiveSlideScale={1}
        bounce={false}
        contentContainerStyle={style.carousel}
        snapOnAndroid={false}
      >
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
      </Carousel>
      </View>
    )
  };
}

class Story extends Component{
  render(){
    return(
      <View>
        <View style={style.imageBorder}>
          <Image style={style.storyImage}source={require('./face.jpg')}/>
        </View>
        <Text style={{textAlign: 'center', fontSize: 12,}}>ionion</Text>
      </View>
    )
  };
}

const style = StyleSheet.create ({
  main: {
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.03)'
  },
  carousel: {
    alignItems: 'center',
  },
  storyImage: {
    height:55,
    width:55,
    borderRadius: 50,
    padding: 30,
  },
  imageBorder:{
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'rgba(0,0,0,0.15)',
    height:65, width:65,
    justifyContent:'center',
    alignItems:'center'
  },
})
