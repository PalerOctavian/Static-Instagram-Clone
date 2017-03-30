import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export class CustomTextInput extends Component {
	render(){
		return(
			<View style={{flexDirection:'row'}}>
				<View style={{flex:0.1}}></View>

				<TextInput
				underlineColorAndroid={'transparent'}
				style={style.textInput}>
				</TextInput>

				<View style={{flex:0.1}}></View>
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
		color: 'rgba(255,255,255,0.3)',
	},
})

export class CustomTransparentButton extends Component {
  render(){
    return(
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 0.1}}></View>

        <View style={{flex: 0.8}}>
          <TouchableOpacity
          onPress ={() => Actions.newsfeed()}
          style={loginButtonStyle.emptySquare}>
          <Text style={loginButtonStyle.squareText}>{this.props.name}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.1}}></View>
      </View>
    )
  };
}

const loginButtonStyle = StyleSheet.create({
  emptySquare: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    height: 50, marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    borderRadius: 2,
  },
  squareText: {
		textAlign: 'center',
		color: 'rgba(255,255,255,0.5)',
	},
})

export class FacebookLoginButton extends Component {

	render(){
		return (
			<View style={fbLogin.mainView}>

				<View style={{ flex: 0.1}}></View>

				<View style={{flex: 0.8}}>
					<TouchableOpacity style={fbLogin.buttonContainer}>
							<Text style={fbLogin.text}>{this.props.name}</Text>
					</TouchableOpacity>
				</View>

				<View style={{ flex: 0.1}}></View>

			</View>
		)
	};
}

const fbLogin = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
	text: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: 'blue',
	},
  buttonContainer: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 2,
  },
})
