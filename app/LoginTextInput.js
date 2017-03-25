import React, { Component } from 'react';
import { View,
		TextInput, 
		StyleSheet} from 'react-native';

export default class LoginTextInput extends Component {
	render () {
		return (
			<View>
	                <View style={{flexDirection:'row'}}>
	                 	<View style={{flex:0.1}}></View>
	                    <TextInput underlineColorAndroid={'transparent'} style={styles.textInput}></TextInput>
	                    <View style={{flex:0.1}}></View>
	                </View>
	                 <View style={{flexDirection:'row'}}>
	                 	<View style={{flex:0.1}}></View>
	                    <TextInput underlineColorAndroid={'transparent'} style={styles.textInput}></TextInput>
	                    <View style={{flex:0.1}}></View>
	                </View>
	            </View>
		)
	};
}

const styles = StyleSheet.create({
	textInput: {
		flex: 0.8,
		borderRadius: 2,
		backgroundColor: '#888888',
		height: 50,
		marginTop: 10,
	},
})