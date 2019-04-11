import React from 'react';
import {
	createAppContainer,
	createStackNavigator,
	createDrawerNavigator,
	createMaterialTopTabNavigator
} from "react-navigation";
import { Image, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

import Home from '@views/Home';
import Settings from '@views/Settings';
import Calendar from '@views/Calendar'

const headerBackgroundImg = () => {
  return (
    <Image
      style={StyleSheet.absoluteFill}
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
    />
  )
}

// HEADER : SETTINGS
export const _headerSettings = navigation => {
	return (
    <Button transparent
      onPress={() => navigation.navigate("Settings")}
			style={{ paddingRight: 20 }}
		>
			<Icon
				name="ios-settings"
				type="Ionicons"
				style={{
					color: 'light-grey'
				}}
			/>
		</Button>
	);
};

// HEADER : BACK
export const _headerBack = navigation => {
	return (
		<Button
			style={{ height: "100%" }}
			transparent
			iconLeft
			onPress={() => navigation.pop()}
		>
			<Icon
				name="ios-arrow-back"
				type="Ionicons"
				style={{
					alignSelf: "center",
					color: 'light-grey',
					marginRight: 0,
					marginTop: 0
				}}
			/>
		</Button>
	);
};

const SettingsDrawer = createDrawerNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: ()=> ({
        title: 'Settings'
      })
    }
  }
)

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerMode: "float",
      title: "Home",
      headerBack: _headerBack(navigation),
      headerRight: _headerRight(navigation)
    })
  }
})

const CalendarStack = createStackNavigator({
  Calendar: {
    screen: Calendar,
    navigationOptions: ({ navigation }) => ({
      headerMode: "float",
      title: "Calendar",
      headerBack: _headerBack(navigation),
      headerRight: _headerRight(navigation)
    })
  }
})

const MainTabBar = createMaterialTopTabNavigator({
  Home: {
    screen: HomeStack,
    title:'HomeTab',
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Icon
          name="home"
          type="FontAwesome"
          color={focused ? 'black' : 'light-grey'}
        />
      )
    })
  },
  Calendar: {
    screen: CalendarStack,
    title:'CalendarTab',
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Icon
          name="calendar"
          type="FontAwesome"
          color={focused ? 'black' : 'light-grey'}
        />
      )
    })
  }
})

const MainNavigator = createAppContainer(
  MainTabBar,
  SettingsDrawer
)

export default MainNavigator;
