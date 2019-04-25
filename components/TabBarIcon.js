import React from 'react';
import { Icon } from 'expo';
import { View } from 'react-native';


import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
	render() {
		const ico = this.props.focused ? this.props.focusedIcon : this.props.defaultIcon;
		return (
			<View style={{left: -15, top: -15}}>
				{ico}
			</View>
		)
	}
}

