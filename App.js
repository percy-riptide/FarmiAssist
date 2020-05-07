import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUs from './Screens/AboutUs';
import Home from './Screens/Home';
import AgriDictionary from './Screens/AgriDictionary';
import HowToUse from './Screens/HowToUse';
import DrawerContent from './Screens/DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
//import MainTabScreen from './Screens/STACKN';


const Drawer = createDrawerNavigator();
function App() {


    return (


        <NavigationContainer >

            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>




                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='How To Use' component={HowToUse} />
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
export default App;
