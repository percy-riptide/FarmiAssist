import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

  let text1 = 'Waiting..';
  let text2 = '';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text1 = JSON.stringify(location.coords.longitude);
    text2 = JSON.stringify(location.coords.latitude);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textcol}>The longiude is:{text1}</Text>
      <Text style={styles.textcol}>The latitude is:{text2}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textcol:{
    color: '#ffffff'
  }
});