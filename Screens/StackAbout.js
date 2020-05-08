import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Language from './Language';
import Home from './Home';
//import Result from './Result';
const StackHome=createStackNavigator()

export default function StackA(){
    return(
    
        <StackHome.Navigator >
            <StackHome.Screen name="Language" component={Language} />
            <StackHome.Screen name="Home" options={{headerShown:false,}} component={Home}/>
   {/*         <StackHome.Screen name="Result" component={Result} /> */}
            
        </StackHome.Navigator>
    
    )
}



