import React, { Component } from 'react';
import {View,
		Text,
		StyleSheet } from 'react-native';

export class HorizontalLine extends Component {
	render(){
		return (
			<View style={style.mainView}>
					<View style={{flex:0.1}}></View>

						<View style={style.slimLine}></View>
							<Text style={style.text}>OR</Text>
						<View style={style.slimLine}></View>

					<View style={{flex:0.1}}></View>
			</View>
		)
	};
}

const style = StyleSheet.create({
	mainView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	slimLine: {
		flex:0.35,
		backgroundColor: 'rgba(255,255,255,0.5)',
		height: 1,
		alignSelf: 'center',
	},
	text:{
		flex:0.1,
		textAlign: 'center',
		color: 'rgba(255,255,255,0.5)',
		fontSize:15
	},
})

export class HelpText extends Component{
	render(){
		return(
			<View style = {help.view}>
				<Text style = {help.text}>
					Forgot yout login details? Get help signing in.
				</Text>
			</View>
		)
	};
}

const help = StyleSheet.create({
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
