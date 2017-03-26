import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity} from 'react-native';
import RegisterFooter from './RegisterFooter.js';
import LoginList from '../LoginList.js';

export default class Register extends Component {
  render(){
    return (
      <View style={style.main}>
        <LoginList/>
        <View>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:0.1}}></View>
              <TextInput
              underlineColorAndroid={'transparent'}
              style={style.textInput}>
              </TextInput>
              <View style={{flex:0.1}}></View>
          </View>

         <View style={{flexDirection:'row'}}>
          <View style={{flex:0.1}}></View>
            <TextInput
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}
            style={style.textInput}>
            </TextInput>
            <View style={{flex:0.1}}></View>
        </View>

        <View style={{flexDirection: 'row'}}>
        <View style={{ flex: 0.1}}>
        </View>
        <View style={{flex: 0.8}}>
          <TouchableOpacity style={{borderWidth: 1,borderColor: 'rgba(255,255,255,0.2)',height: 50, marginBottom: 10, backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center',borderRadius: 2,}}>
              <Text style={style.text}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.1}}>
        </View>
        </View>

      </View>
        <RegisterFooter style={style.footer}/>
      </View>
    )
  };
}

const style = StyleSheet.create({
  inputView: {
    flexDirection: 'column',

  },
  main: {
    backgroundColor: '#6800BD',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex:1,
  },
  fakeView: {
    flex:0.1,
  },
  textInput: {
    flex:0.8,
    marginBottom: 10,
		borderRadius: 2,
		backgroundColor: 'rgba(255,255,255,0.1)',
		height: 50,
		color: 'rgba(255,255,255,0.3)',
	},
  footer: {
    position: 'absolute',
  },
  text: {
		textAlign: 'center',
		color: 'rgba(255,255,255,0.5)',
	},
})
