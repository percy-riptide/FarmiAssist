import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Language({navigation}) {
     function languageHandler(){
            
            navigation.navigate('Home',{"val":"en"})

     }
     function languageHandler1(){
        
         navigation.navigate('Home',{val:'ka'})
     }
    
  return (
    <View style={styles.container}>
      <View style={{ margin: 50, width: 90 }}>
                    <TouchableOpacity
                        onPress={languageHandler}
                        style={{
                            alignItems: 'center',
                            padding: 10, backgroundColor: '#322d96',
                            borderRadius: 24
                        }}>
                        <Text style={{color:'#ffffff', alignItems:'center', justifyContent:'center', fontSize:18}}>English</Text></TouchableOpacity>
                </View>
                <View style={{ margin: 50, width: 90 }} >
                    <TouchableOpacity
                        onPress={languageHandler1}
                        style={{
                            alignItems: 'center',
                            padding: 10,
                            backgroundColor: '#322d96',
                            borderRadius: 24
                        }}>
                        <Text style={{color:'#ffffff', alignItems:'center', justifyContent:'center', fontSize:18}}>ಕನ್ನಡ</Text></TouchableOpacity>
                </View>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});