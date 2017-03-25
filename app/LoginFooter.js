import React, { Component } from 'react';
import {View, 
		Text,
		StyleSheet } from 'react-native';

export default class LoginFooter extends Component {
	render(){
		return (
			<View style = {style.view}>
				<Text style = {style.text}>
					Dont have an account? Sign up.
				</Text>
			</View>
		)
	};
}

const style = StyleSheet.create({
	text: {
		textAlign: 'center',
		color: 'rgba(255,255,255,0.5)',
	},
	view: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		borderTopWidth: 1,
		borderTopColor: 'rgba(255,255,255,0.3)',
	},
})