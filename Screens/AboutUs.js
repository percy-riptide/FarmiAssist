import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import i18n from 'i18n-js';
import en from './Languages/en.json';
import kn from './Languages/kn.json';

const trans={
en: ()=>require('./Languages/en.json'),
kn: ()=>require('./Languages/kn.json')
}
i18n.fallback=true;
i18n.translations={en,kn};

function AboutUs({ navigation}) {
    return (
        <View style={{backgroundColor: '#1c1c1c',flex:1}}>
            <View style={styles.header}>
                <View>
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#1c1c1c" paddingTop={30} onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{paddingTop: 34, fontSize: 16, paddingHorizontal: 5, color: 'white'}}>{i18n.t('about')}</Text>
                </View>
            </View>
            <View style={{padding: 20,
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent:'center', flex:8}}>
                <Image source={require('../assets/icon.png')} style={{ width: 50, height: 50}}/>
                <Text style={styles.textcol}>{i18n.t('appname')}</Text>
                <Text style={styles.textcol}>{i18n.t('caption')}</Text>
                <Text style={styles.textcol}>V1.0</Text>
                <View style={{width:180}}><TouchableOpacity onPress={()=>{Linking.openURL('https://www.github.com/percy-riptide/FarmiAssist')}} style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                            backgroundColor: '#c28729',
                            borderRadius: 24
                        }}><Text style={styles.textcol}>{i18n.t('git')}</Text></TouchableOpacity></View>
                        <Text style={{fontSize: 24, color:'#ffffff', padding: 20,textAlign:'center'}}>{i18n.t('developer')}</Text>
            </View>
            <View style={{backgroundColor:"#1c1c1c",flex:15}}>
            <ScrollView style={{backgroundColor:"#1c1c1c"}}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkedin.com/in/shreya-patil-039787191')}><Image source={require('../assets/shreya.jpg')} style={{borderRadius:50, width:100, height:100}} /></TouchableOpacity>
                    <Text style={styles.textcol}>{i18n.t('shreya')}</Text>
                    <Text style={styles.textcol}>UI, Speech Recognition</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkedin.com/in/jyoti-poddar-8656191a6')}><Image source={require('../assets/jyoti.jpg')} style={{borderRadius:50, width:100, height:100}} /></TouchableOpacity>
                    <Text style={styles.textcol}>{i18n.t('jyoti')}</Text>
                    <Text style={styles.textcol}>Database Design, Natural Language Processing</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=> Linking.openURL('https://linkedin.com/in/manoj-kumar-49209a1aa')}><Image source={require('../assets/manoj.jpg')} style={{borderRadius:50, width:100, height:100}} /></TouchableOpacity>
                    <Text style={styles.textcol}>{i18n.t('manoj')}</Text>
                    <Text style={styles.textcol}>Database Design, Natural Language Processing</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkedin.com/in/pratik-p-patil-618887194')}><Image source={require('../assets/pratik.jpg')} style={{borderRadius:50, width:100, height:100}} /></TouchableOpacity>
                    <Text style={styles.textcol}>{i18n.t('pratik')}</Text>
                    <Text style={styles.textcol}>UI, PHP</Text>
                </View>
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent:'center'
    },
    header: {
        flexDirection:'row',
        alignItems:'stretch',
        flex: 2
    },
    textcol: {
        color: '#ffffff',
        fontSize: 18,
        textAlign:'center',
        padding: 5,
    }
})
export default AboutUs;