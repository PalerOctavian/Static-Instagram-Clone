import React, { Component } from 'react';
import { StyleSheet,
	TextInput,
	View,
	TouchableHighlight
} from 'react-native';
import LoginList from './LoginList.js';
import LoginTextInput from './LoginTextInput.js';
import LoginFooter from './LoginFooter.js';
import LoginText1 from './LoginText1.js';
import LoginText2 from './LoginText2.js';
import LoginButton from './LoginButton.js';

export default class Login extends Component {
	render() {
		return (
			<View style={{flex:1, flexDirection:'column',justifyContent: 'space-between', backgroundColor: '#6800BD'}}>
			 	<LoginList/>
			 	<View>
				 	<LoginTextInput/>
				 	<View style={{flexDirection: 'column', height:50, justifyContent: 'space-between'}}>
					 	<LoginText1 />
					 	<LoginText2/>
				 	</View>
				 	<LoginButton/>
			 	</View>
			 	<LoginFooter/>
            </View>
			);
	};
}
