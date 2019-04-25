import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {getHeaderHeight} from '../utils/Header';
import TranHeader from "../components/headers/TranHeader";

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		headerTitle: <TranHeader title={"北斗学生定位"}/>,
		headerTransparent: true,
		headerStyle: {
			backgroundColor: 'transparent',
			height: 56
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>{getHeaderHeight() + "___"}</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: getHeaderHeight(),
		backgroundColor: '#ccc',
	},
});
