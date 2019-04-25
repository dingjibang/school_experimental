import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import colors from "../constants/Colors"

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import ShowIcon from "../assets/images/tab/position.svg"
import ShowIconC from "../assets/images/tab/positionc.svg"

import SchoolIcon from "../assets/images/tab/school.svg"
import SchoolIconC from "../assets/images/tab/schoolc.svg"

import FindIcon from "../assets/images/tab/find.svg"
import FindIconC from "../assets/images/tab/findc.svg"

import MoreIcon from "../assets/images/tab/more.svg"
import MoreIconC from "../assets/images/tab/morec.svg"

const iconStyles = {
	width: 110,
	height: 110
}
const HomeStack = createStackNavigator({Home: HomeScreen});
HomeStack.navigationOptions = {
	tabBarLabel: '定位',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} defaultIcon={<ShowIcon />} focusedIcon={<ShowIconC/>} />,
};

const SchoolStack = createStackNavigator({Home: HomeScreen});
SchoolStack.navigationOptions = {
	tabBarLabel: '家校',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} defaultIcon={<SchoolIcon/>} focusedIcon={<SchoolIconC/>} />,
};

const findStack = createStackNavigator({Home: LinksScreen});
findStack.navigationOptions = {
	tabBarLabel: '发现',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} defaultIcon={<FindIcon/>} focusedIcon={<FindIconC/>} />,
};

const moreStack = createStackNavigator({Home: SettingsScreen});
moreStack.navigationOptions = {
	tabBarLabel: '更多',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} defaultIcon={<MoreIcon/>} focusedIcon={<MoreIconC/>} />,
};


export default createBottomTabNavigator({
	HomeStack,
	SchoolStack,
	findStack,
	moreStack,
}, {
	tabBarOptions: {
		activeTintColor: colors.tintColor,
		style: {
			borderTopWidth: 0,
			borderBottomWidth: 0,
			height: 55,
			paddingBottom: 5
		}
	}
});
