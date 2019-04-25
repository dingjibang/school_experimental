import React from "react";
import {Text, View} from 'react-native';
import {LinearGradient} from 'expo';

export default class extends React.Component {
	render(){
		return (
			<View style={{width: "100%", height: "100%"}}>
				<LinearGradient colors={['rgba(255,255,255,0.83)', 'rgba(255,255,255,0.98)']} style={{height: "100%", width: "100%"}}>
					<Text>{this.props.title}</Text>
				</LinearGradient>
			</View>
		)
	}
}
