import React, {Component} from 'react';
import{
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default class NewsfeedPost extends Component {
  render(){
    return(
      <View style={style.main}>
        <PostHeader/>
        <PostBody/>
        <PostActions/>
      </View>
    )
  };
}

class PostHeader extends Component{
  render(){
    return(
      <View style={style.headerMain}>
        <View style={{flexDirection:'row'}}>
          <Image style={style.headerImage} source={require('./face.jpg')}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>ionion</Text>
            <Text>Parcul Central Brasov</Text>
          </View>
        </View>
        <Image style={style.dots} source={require('./dots.png')}/>
      </View>
    )
  };
}

class PostBody extends Component {
  render(){
    return(
      <View>
        <Image  style={{height:300, width:400}} source={require('./postImage.jpg')}/>
      </View>
    )
  };
}

class PostActions extends Component {
  render(){
    return(
      <View style={{flex:1, flexDirection:'row'}}>
        <View style={{flex:.05}}>
        </View>
        <View style={{flexDirection: 'row',flex:0.9, height: 50, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.05)', alignItems: 'center', justifyContent:'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={style.actionImage} source={require('./PostIcons/like.png')}/>
            <Image style={style.actionImage} source={require('./PostIcons/comment.png')}/>
            <Image style={style.actionImage} source={require('./PostIcons/share.png')}/>
          </View>
          <Image style={{  opacity: .5}} source={require('./PostIcons/bookmark.png')}/>
        </View>
        <View style={{flex:.05}}>
        </View>
      </View>
    )
  };
}

const style = StyleSheet.create({
  main:{
    height:410,
    marginBottom:10,
  },
  headerMain:{
    height:60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerImage: {
    height:35,
    width:35,
    borderRadius: 50,
    marginLeft:10,
    marginRight:10,
  },
  dots: {
    height:15,
    width:15,
    opacity:0.4,
    marginRight:10,
  },
  actionImage:{
    opacity: .5,
    marginRight: 15,
  }
})
