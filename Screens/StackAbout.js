import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import AboutUs from './AboutUs';
const StackNavi = createStackNavigator();
function STACKAb() {
    return (
        <StackNavi.Navigator>
            <StackNavi.Screen name='About US' component={AboutUs} />


        </StackNavi.Navigator>

    )
}
export default STACKAb;