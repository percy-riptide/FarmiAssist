import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import i18n from 'i18n-js';
import Icon from 'react-native-vector-icons/Ionicons';
import en from './Languages/en.json';
import kn from './Languages/kn.json';
import * as Speech from 'expo-speech';
import {Audio} from 'expo-av';

const trans={
    en: ()=>require('./Languages/en.json'),
    kn: ()=>require('./Languages/kn.json')
}

i18n.translations = { kn, en };
i18n.locale = "en";
i18n.fallbacks=true;

export default function Home({route, navigation}) {
    const [textinput, setTextinput] = useState('');

    const InputTextHandler = (textinput) => {
        setTextinput(textinput);
    }
    const {val}=route.params;
    const QueryHandler = () => {
        if(textinput == ''){
            if(val == 'en'){
                Alert.alert(
                    'Query Empty',
                    'Please Enter a Query to continue',
                    [
                    { text: 'OK', onPress: () => {}},
                    ],
                    { cancelable: false }
                );
            }
            else{
                Alert.alert(
                    'ಪ್ರಶ್ನೆ ಖಾಲಿಯಾಗಿದೆ',
                    'ಮುಂದುವರಿಸಲು ದಯವಿಟ್ಟು ಪ್ರಶ್ನೆಯನ್ನು ನಮೂದಿಸಿ',
                    [
                    { text: 'ಸರಿ', onPress: () => {}},
                    ],
                    { cancelable: false }
                ); 
            }
        }
        else {
            fetch('http://192.168.43.112/farmiassist/main.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    string: textinput
                })
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('response object:',responseData)
            })
            .done();
            setTextinput('');
            navigation.navigate('Result');
        }
    }

    const ClearText = () => {
        setTextinput('');
    }
    const soundObject = new Audio.Sound();
    const speakup = async()=>{
        if(i18n.locale == 'en')
        {
            var speech = "Please tell us your problem"
            Speech.speak(speech)
        }
        else
        {
        try{
            await soundObject.loadAsync(require('../assets/Speech/hello.mp3'));
            await soundObject.playAsync();
        }
        catch(error){
            console.log('error');
        }
    }
    }

    if(val=='en')
    {
        i18n.locale="en";
    }
    else{
        i18n.locale="kn";
    }
    
    return (
        
        <View style={styles.bg}>
            <View style={styles.header}>
                <View>
                    <Icon.Button name="ios-menu" size={30} backgroundColor='#1c1c1c' paddingTop={30} onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{paddingTop: 34, fontSize: 16, paddingHorizontal: 5, color: 'white'}}>{i18n.t('appname')}</Text>
                </View>
            </View>              
            <View style={styles.container}>
                
                <Image
                    source={require('../assets/icon.png')}
                    style={{ width: 70, height: 70,marginBottom:10 }}
                />
                <View style={styles.container}><Text style={styles.textcol}>{i18n.t('hello')}</Text></View>
            </View>
            <View
                style={{
                    backgroundColor: 'rgba(195, 195, 162,0.2)',
                    borderRadius: 30,
                    margin: 20
                }}
            >
                <TextInput
                    multiline
                    numberOfLines={2}
                    placeholder={i18n.t('problem')}
                    keyboardAppearance="dark"
                    style={{ width: '95%', color: '#ffffff', padding: 15, fontSize: 20 }}
                    onChangeText={InputTextHandler} value={textinput}
                />
            </View>
            <View style={styles.buttonholder}>
                <View style={{ margin: 50, width: 90 }}>
                    <TouchableOpacity
                        onPress={ClearText}
                        style={{
                            alignItems: 'center',
                            padding: 10, backgroundColor: '#d06060',
                            borderRadius: 24
                        }}>
                        <Text style={{color:'#ffffff', alignItems:'center', justifyContent:'center', fontSize:18}}>{i18n.t('cancel')}</Text></TouchableOpacity>
                </View>
                <View style={{ margin: 50, width: 90 }} >
                    <TouchableOpacity
                        onPress={QueryHandler}
                        style={{
                            alignItems: 'center',
                            padding: 10,
                            backgroundColor: '#79d488',
                            borderRadius: 24
                        }}>
                        <Text style={{color:'#ffffff', alignItems:'center', justifyContent:'center', fontSize:18}}>{i18n.t('send')}</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
            <Icon.Button name="ios-volume-high" size={45} backgroundColor='#1c1c1c' paddingTop={30} onPress={speakup}></Icon.Button>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        padding: 12,
                        backgroundColor: '#7979f1',
                        borderRadius: 24
                    }}>
                    <Text style={{color:'#ffffff', alignItems:'center', justifyContent:'center', fontSize:18}}>{i18n.t('speak')}</Text></TouchableOpacity>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent: 'center',
        flex:2
    },
    bg: {
        backgroundColor: '#1c1c1c',
        flex: 1
    },
    textcol: {
        color: '#ffffff',
        fontSize: 18
    },
    buttonholder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex:2
    },
    header: {
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1
    }
});