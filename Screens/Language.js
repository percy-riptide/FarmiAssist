import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Speech from 'expo-speech';

export default function Language({navigation}) {
     function languageHandler(){
        Alert.alert('Message','Application will be re rendered on change of language or restart the application to change the language',[
            {text:'Understood',onPress:()=> {}}])
            navigation.navigate('Home',{"val":"en"})
     }
     function languageHandler1(){Alert.alert('ಸಂದೇಶ ',' ಭಾಷೆಯ ಬದಲಾವಣೆಯ ಮೇಲೆ ಅಪ್ಲಿಕೇಶನ್ ಅನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ ಅಥವಾ ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಲು ಅಪ್ಲಿಕೇಶನ್ ಅನ್ನು ಮರುಪ್ರಾರಂಭಿಸಿ ',[
        {text:'ಅರ್ಥವಾಯಿತು' ,onPress:()=>{}}])
         navigation.navigate('Home',{val:'ka'})
     }
     const speakup = async()=>{
      
          var speech = "Please choose the language of your interest either english or kannada."
         Speech.speak(speech)
         speak()
          
      }
      const speak = async()=>{
        Speech.speak('ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಸಕ್ತಿಯ ಭಾಷೆಯನ್ನು ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್ ಆಯ್ಕೆಮಾಡಿ')
      }

  return (
      <View style={{flex:1,flexDirection:'column',justifyContent:"center",alignItems:'center'}}>
    <View style={styles.container}>
      <View style={{ margin: 50, width: 90 }}>
                    <TouchableOpacity
                        onPress={languageHandler}
                        style={{
                            alignItems: 'center',
                            padding: 10, backgroundColor: '#322d96',
                            borderRadius: 24
                        }}>
                        <Text style={{color:'#ffffff', alignItems:'center', justifyContent:'center', fontSize:18}}> English </Text></TouchableOpacity>
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
                        <Text style={{color:'#ffffff', alignItems:'center', justifyContent:'center', fontSize:18}}> ಕನ್ನಡ </Text></TouchableOpacity>

                     </View>
                </View>
                     <Icon.Button name='ios-volume-high' size={45} backgroundColor="#1c1c1c" onPress={speakup} />
                        
                 
           </View>
  );

}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection:'row',
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});