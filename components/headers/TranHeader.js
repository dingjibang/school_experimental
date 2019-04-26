import React from "react";
import {StatusBar, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {getStatusBarHeight} from '../../utils/Header';

export default class extends React.Component {
	render(){
		return (
			<View style={{width: "100%", height: "100%", top: -getStatusBarHeight(), borderTopColor: "green", borderTopWidth: 3}}>
				<LinearGradient colors={['rgba(255,255,255,0.98)', 'rgba(255,255,255,0.83)']} style={{height: "100%", width: "100%"}}>
					<View style={{height: getStatusBarHeight(), width: "100%"}}/>
					<Text>{this.props.title + getStatusBarHeight()}</Text>
				</LinearGradient>
			</View>
		)
	}
}
