import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import * as Localize from 'expo-localization';
import i18n from 'i18n-js';
export default function Language({navigation}) {
     function languageHandler(){
            navigation.navigate('Home',{"val":"en"})
     }
     function languageHandler1(){
         navigation.navigate('Home',{val:'ka'})
     }
    
  return (
    <View style={styles.container}>
      <Button title="English" style={{fontSize:20}} onPress={languageHandler} />
      <Button title="ಕನ್ನಡ" style={{fontSize:24}} onPress={languageHandler1} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
