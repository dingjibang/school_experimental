import React from 'react';
import {StyleSheet, Text, View, ImageBackground, StatusBar, Platform} from 'react-native';
import {getHeaderHeight, getStatusBarHeight} from '../utils/Header';
import TranHeader from "../components/headers/TranHeader";

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		headerTitle: <TranHeader title={"北斗学生定位"}/>,
		headerTransparent: true,
		headerStyle: {
			backgroundColor: 'transparent',
			height: 56 + getStatusBarHeight()
		}
	};

	render() {
		Platform.OS === 'android' ? StatusBar.setBackgroundColor('rgba(0,0,0,0)', true) : '';//背景颜色是透明           
		Platform.OS === 'android' ? StatusBar.setTranslucent(true) : '';//设置状态栏透明           

		return (
			<View style={styles.container}>
				<Text>{getHeaderHeight() + "___" + getStatusBarHeight()}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderTopWidth: 1,
		borderTopColor: "red",
		paddingTop: getHeaderHeight(),
		backgroundColor: "red"
	},
});
