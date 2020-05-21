import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Language from './Language';
import Home from './Home';
import Result from './Result';

const StackHome=createStackNavigator()

export default function StackA(){
    return(
    
        <StackHome.Navigator >
            <StackHome.Screen name="Language/ಭಾಷೆ" component={Language} />
            <StackHome.Screen name="Home" options={{headerShown:false}} component={Home}/>
            <StackHome.Screen name="Result" options={{headerShown:false}} component={Result} /> 
            
        </StackHome.Navigator>
    
    )
}