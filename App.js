import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [textinput, setTextinput] = useState('');
  const [addQuery, setAddQuery] = useState('');

  const InputTextHandler = (textinput) => {
    setTextinput(textinput);
  }

  const QueryHandler = () => {
    setAddQuery(textinput);
    setTextinput('');
  }

const ClearText = () => {
  setTextinput('');
}

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let longitude = 'Waiting..';
  let latitude = '';
  let statusheight=Constants.statusBarHeight;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    longitude = JSON.stringify(location.coords.longitude);
    latitude = JSON.stringify(location.coords.latitude);
  }

  return (
    <View style={styles.bg}>
      <View style={styles.topview}>
      <Image source={require('./assets/icon.png')} style={{width:50, height:50}}/>
      <Text style={styles.textcol}>FARMI-ASSIST</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textcol}>The longiude is:{longitude}</Text>
        <Text style={styles.textcol}>The latitude is:{latitude}</Text>
      </View>
      <View style={styles.container}>
        <TextInput multiline numberOfLines={4} placeholder="Please Enter Your Problem :)" keyboardAppearance="dark" style={{borderColor:'white', borderBottomWidth: 1, width: '95%', color: '#ffffff'}} onChangeText={InputTextHandler} value={textinput}></TextInput>
        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between', margin:10}}><View style={{margin:10, width:70}}><Button title="Clear" onPress={ClearText} color="#d06060"/></View>
        <View style={{margin:10, width:70}}><Button title="Submit" onPress={QueryHandler} color="#79d488"/></View></View>
      </View>
      <View style={styles.container}>
        <Button title="Speak the problem" color="#7979f1"/>
      </View>
      <View style={styles.container}>
        <Text style={styles.textcol}>{addQuery}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topview: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container:{
    padding: 35,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bg:{
    backgroundColor: '#1c1c1c',
    flex: 1
  },
  textcol:{
    color: '#ffffff'
  }
});