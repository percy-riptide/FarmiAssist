import React, { useState, useEffect } from 'react';
import { Modal, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, I18nManager } from 'react-native';
import * as Localize from 'expo-localization';
import i18n from 'i18n-js';
import Icon from 'react-native-vector-icons/Ionicons';
import en from './Languages/en.json';
import kn from './Languages/kn.json';
import Result from './Result';
import * as Speech from 'expo-speech'
//import i18n from './i18n'

/*const en = {
    appname: "Farmi-Assist",
    send: "Submit",
    cancel: "Clear",
    problem: "Please Enter Your Problem Here",
    speak: "Speak your problem"
}

const kn = {
    appname: "ಫಾರ್ಮಿ-ಅಸಿಸ್ಟ್",
    send: "ಸಲ್ಲಿಸಿ",
    cancel: "ಅಳಿಸಿ",
    problem: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ",
    speak: "ನಿಮ್ಮ ಸಮಸ್ಯೆ ಮಾತನಾಡಿ"
}*/
const trans={
    en: ()=>require('./Languages/en.json'),
    kn: ()=>require('./Languages/kn.json')
}

i18n.translations = { kn, en };
i18n.locale = "en";
i18n.fallbacks=true

export default function Home({route, navigation}) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [textinput, setTextinput] = useState('');
    const [addQuery, setAddQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(true);

    const InputTextHandler = (textinput) => {
        setTextinput(textinput);
    }

    const QueryHandler = () => {
        navigation.navigate('Result')
    }

    const ClearText = () => {
        setTextinput('');
    }
    function speakup(){
        var say="Please tell us your problem";
        Speech.speak(say);
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
    let latitude = 'Waiting';

    if (errorMsg) {
        longitude = 'Error!';
        latitude = 'Error!';
    }
    else if (location) {
        longitude = JSON.stringify(location.coords.longitude);
        latitude = JSON.stringify(location.coords.latitude);
    }
    const {val}=route.params
    if(val=='en')
    {
        i18n.locale="en"
    }
    else{
        i18n.locale="kn"
    }
    console.log("hi"+i18n.locale)
    return (
        
        <View style={styles.bg}>
            <View>
                <View>
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#1c1c1c" paddingTop={30} onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                </View>
   
                
                                
            <View style={styles.topview}>
                <Image
                    source={require('../assets/icon.png')}
                    style={{ width: 50, height: 50 }}
                />
                <View style={styles.container}><Text style={styles.textcol}>{i18n.t('appname')}</Text></View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.textcol}>{i18n.t('problem')}</Text>
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
                    placeholder="......."
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
                        <Text style={styles.textcol}>{i18n.t('cancel')}</Text></TouchableOpacity>
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
                        <Text style={styles.textcol}>{i18n.t('send')}</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        padding: 12,
                        backgroundColor: '#7979f1',
                        borderRadius: 24
                    }} onPress={speakup}>
                    <Text style={styles.textcol}>{i18n.t('speak')}</Text></TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.textcol}>{addQuery}</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    topview: {
        paddingTop: 40,
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        padding: 35,
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bg: {
        backgroundColor: '#1c1c1c',
        flex: 1,
        paddingRight:10
    },
    textcol: {
        color: '#ffffff',
        fontSize: 18,
        paddingRight:10
    },
    buttonholder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});