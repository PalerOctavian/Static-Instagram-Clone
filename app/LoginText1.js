import React, { Component } from 'react';
import {View, 
		Text,
		StyleSheet } from 'react-native';

export default class LoginText1 extends Component {
	render(){
		return (
			<View style = {style.view}>
				<Text style = {style.text}>
					Forgot yout login details? Get help signing in.
				</Text>
			</View>
		)
	};
}

const style = StyleSheet.create({
	text: {
		textAlign: 'center',
		color: 'rgba(255,255,255,0.5)',
		fontSize: 13,
	},
	view: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})