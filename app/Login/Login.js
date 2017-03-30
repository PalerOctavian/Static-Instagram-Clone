import React, { Component } from 'react';
import { StyleSheet,
	TextInput,
	View,
	TouchableHighlight
} from 'react-native';
import LoginHeader from './LoginHeader.js';
import LoginFooter from './LoginFooter.js';
import { HorizontalLine, HelpText } from './Text.js';
import { CustomTextInput, CustomTransparentButton, FacebookLoginButton } from '../MyComponents/CustomInteractions';

export default class Login extends Component {
	render() {
		return (
			<View style={style.mainView}>
			 	<LoginHeader/>

			 	<View>

					<CustomTextInput/>

					<CustomTextInput/>

					<CustomTransparentButton name={"Log In"}/>

				 	<View style={style.inputView}>
					 	<HelpText />
					 	<HorizontalLine/>
				 	</View>

				 	<FacebookLoginButton name={"Login with Facebook"}/>

			 	</View>

			 	<LoginFooter/>
      </View>
			);
	};
}

const style = StyleSheet.create({
	mainView:{
		flex:1,
		flexDirection:'column',
		justifyContent: 'space-between',
		backgroundColor: '#6800BD',
	},
	inputView: {
		flexDirection: 'column',
		height:50,
		justifyContent: 'space-between',
	},
})
