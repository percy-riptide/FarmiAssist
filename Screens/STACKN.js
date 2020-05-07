import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import AboutUs from './AboutUs';
import HowToUse from './HowToUse';
import AgriDictionary from './AgriDictionary';


const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const UseStack = createStackNavigator();
const AgriStack = createStackNavigator();
      

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
);
const AgriStackScreen = ({ navigation }) => (
    <AgriStack.Navigator>
        <AgriStack.Screen name="Agricultural Dictionary" component={AgriDictionary} />
    </AgriStack.Navigator>
);

const AboutStackScreen = ({ navigation }) => (
    <AboutStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <AboutStack.Screen name="About" component={AboutUs} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </AboutStack.Navigator>
);
const UseStack  = ({ navigation }) => (
    <UseStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <UseStack.Screen name="How To Use" component={HowToUse} options={{
            title: 'Home Page',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </UseStack.Navigator>
);