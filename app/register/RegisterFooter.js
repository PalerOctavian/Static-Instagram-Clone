import React, { Component } from 'react';
import {View,
	Text,
	StyleSheet,
	Navigator } from 'react-native';
import {Actions} from 'react-native-router-flux'


export default class LoginFooter extends Component {
	render(){
		return (
			<View style = {style.view}>
				<Text style = {style.text}>
					Already have an account?
					<Text style = {style.textHighlight}
					onPress={() => Actions.login()}>
					Log in.
					</Text>
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
	textHighlight: {
		fontWeight: 'bold',
	},
})
