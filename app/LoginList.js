import React, { Component } from 'react';
import { Text, 
		View,
		StyleSheet} from 'react-native';

export default class LoginList extends Component {
	render () {
		return (
			<View>
		 		<Text style = {style.text}> English UK </Text>
		 	</View>
		)
	};
}

const style = StyleSheet.create({
	text: {
		textAlign: 'center',
		color: 'rgba(255,255,255,0.5)',
		marginTop: 10,
	},
})