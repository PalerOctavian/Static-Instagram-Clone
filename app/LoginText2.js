import React, { Component } from 'react';
import {View, 
		Text,
		StyleSheet } from 'react-native';

export default class LoginText2 extends Component {
	render(){
		return (
			<View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
					<View style={{flex:0.1}}></View>
					<View style={{flex:0.35, backgroundColor: 'rgba(255,255,255,0.5)', height: 1,alignSelf: 'center'}}>

					</View>
					<Text style={{flex:0.1, textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize:15}}>OR</Text>
					<View style={{flex:0.35,  backgroundColor: 'rgba(255,255,255,0.5)', height: 1,alignSelf: 'center'}}>

					</View>
					<View style={{flex:0.1}}></View>
			</View>
		)
	};
}