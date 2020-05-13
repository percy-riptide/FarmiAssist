import React, { useState, useEffect, createContext } from 'react';
import { Modal, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, I18nManager } from 'react-native';
import i18n from 'i18n-js';
import Icon from 'react-native-vector-icons/Ionicons';
import en from './Languages/en.json';
import kn from './Languages/kn.json';
import Result from './Result';
import * as Speech from 'expo-speech';

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

    const QueryHandler = () => {
        navigation.navigate('Result');
    }

    const ClearText = () => {
        setTextinput('');
    }
    function speakup(){
        var say="Please tell us your problem";
        Speech.speak(say);
    }

    const {val}=route.params
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
                    style={{ width: 50, height: 50 }}
                />
                <View style={styles.container}><Text style={styles.textcol}>{i18n.t('hello')}</Text></View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#ffffff', alignItems:'center', justifyContent:'center', fontSize:16}}>{i18n.t('problem')}</Text>
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
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        padding: 12,
                        backgroundColor: '#7979f1',
                        borderRadius: 24
                    }} onPress={speakup}>
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