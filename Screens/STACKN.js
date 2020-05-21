import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import AboutUs from './AboutUs';

import AgriDictionary from './AgriDictionary';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();

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

export const AboutStackScreen = ({ navigation }) => (
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

