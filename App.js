
import React, { useMemo,useState, createContext } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUs from './Screens/AboutUs';
import Home from './Screens/Home';
import AgriDictionary from './Screens/AgriDictionary';
import DrawerContent from './Screens/DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import StackA from './Screens/StackAbout'
import Language from './Screens/Language'
import * as Localization from 'expo-localization'
import {AboutStackScreen} from './Screens/STACKN'


const Drawer = createDrawerNavigator();

const MyTheme = {
    dark: true,
    colors: {
        primary: 'rgb(0,0,0)',
        background: 'rgb(28,28,28)',
        card: 'rgb(28,28,28)',
        text: 'rgb(255,255,255)'
    }
}
    
    

export default function App() {
  
    return (
        
        <NavigationContainer theme={MyTheme}>
    

            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>

            

                <Drawer.Screen name='Choose Language' component={StackA} /> 
                
                <Drawer.Screen name='Language' component={Language} />  
                <Drawer.Screen name='Home' component={Home} />
                
                <Drawer.Screen name='Agricultural Dictionary' component={AgriDictionary} />
                <Drawer.Screen name='About' component={AboutUs} />


            </Drawer.Navigator>

        
 
        </NavigationContainer>
    
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
//export default App;


