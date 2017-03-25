import React, { Component } from 'react';
import { View,
		TextInput, 
		StyleSheet, 
		TouchableOpacity,
		Text} from 'react-native';

export default class LoginTextInput extends Component {
	render () {
		return (
			<View>

                <View style={{flexDirection:'row'}}>
                 	<View style={{flex:0.1}}></View>
                    <TextInput underlineColorAndroid={'transparent'} style={style.textInput}></TextInput>
                    <View style={{flex:0.1}}></View>
                </View>

                 <View style={{flexDirection:'row'}}>
                 	<View style={{flex:0.1}}></View>
                    <TextInput secureTextEntry={true} underlineColorAndroid={'transparent'} style={style.textInput}></TextInput>
                    <View style={{flex:0.1}}></View>
                </View>

                <View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 0.1}}>
					</View>
					<View style={{flex: 0.8}}>
						<TouchableOpacity style={{borderWidth: 1,borderColor: 'rgba(255,255,255,0.2)',height: 50, marginBottom: 10, backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center',borderRadius: 2,}}>
								<Text style={style.text}>Log In</Text>
						</TouchableOpacity>
					</View>
					<View style={{ flex: 0.1}}>
				</View>

			</View>

	        </View>
		)
	};
}

const style = StyleSheet.create({
	textInput: {
		flex: 0.8,
		borderRadius: 2,
		backgroundColor: 'rgba(255,255,255,0.1)',
		height: 50,
		marginBottom: 15,
		paddingLeft: 3,
	},
	text: {
		textAlign: 'center',
		color: 'rgba(255,255,255,0.5)',

	},
})