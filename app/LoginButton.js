import React, { Component } from 'react';
import {View, 
		Text,
		TouchableOpacity,
		StyleSheet } from 'react-native';

export default class LoginButton extends Component {
	render(){
		return (
			<View style={{ flexDirection: 'row' }}>
				<View style={{ flex: 0.1}}>
				</View>
				<View style={{flex: 0.8}}>
					<TouchableOpacity style={{height: 50, marginTop: 10, backgroundColor: '#ffffff', justifyContent: 'center',borderRadius: 2,}}>
							<Text style={style.text}>Login with Facebook</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 0.1}}>
				</View>
			</View>
		)
	};
}

const style = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: 'blue',
	},
})