import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';


export default class SuggestionsCarousel extends Component {
  render(){
    return(
      <View style={style.mainView}>


        <View style={{flexDirection: 'row', height:40, alignItems: 'center'}} >

          <View style={{flex:0.03}}></View>
          <View style={style.headerView}>
            <Text style={{fontSize: 15,fontWeight: 'bold' ,color: 'black'}}>Suggestions for you</Text>
            <Text style={{fontSize: 15,fontWeight: 'bold' ,color: 'rgba(0,0,255,0.6)'}}>See All</Text>
          </View>
          <View style={{flex:0.03}}></View>

        </View>

        <View style={style.carouselStyle}>

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
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
            <SuggestionCard/>
        </Carousel>
        </View>

      </View>
    )
  };
}

const style = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.94,
  },
  carouselStyle: {

  },
})

class SuggestionCard extends Component {
  render(){
    return(
      <View style={cardStyle.mainView}>
        <Image style={cardStyle.x} source={require('./x.png')}/>




      </View>
    )
  };
}

const cardStyle = StyleSheet.create({
  mainView: {
    height:200,
    width: 130,
    backgroundColor: 'white',
    marginBottom: 12,
    marginLeft: 10,
    borderRadius: 5,
  },
  x: {
    position: 'absolute',
    height: 10,
    width:10,
    top:11,
    right:10,
    opacity: 0.4,
  },
})
