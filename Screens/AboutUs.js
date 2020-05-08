import React,{useContext} from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Localize from 'expo-localization';
import i18n from 'i18n-js';
import en from './Languages/en.json'
import kn from './Languages/kn.json'
import Home from './Home'
//import {LocalizationContext} from '../App'
const trans={
en: ()=>require('./Languages/en.json'),
kn: ()=>require('./Languages/kn.json')
}
i18n.translations={en,kn}
console.log("A"+i18n.locale)

function AboutUs({ navigation}) {

        
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View >
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#1c1c1c" paddingTop={30} onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{ paddingTop: 35,fontSize:16, paddingHorizontal:130, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>{i18n.t('about')}</Text>
                </View>
                </View>
            <View style={styles.Main}>
                <Image source={require('../assets/icon.png')} style={{ width: 70, height: 70, paddingTop: 15 }} />
    <Text style={{ color: '#F5F5F5', fontWeight: 'bolder',fontSize:16, marginTop: 6 }}>{i18n.t('appname')}</Text>
    <Text style={{ color: '#F5F5F5', marginTop: 6 }}>{i18n.t('version')}</Text>
                
    <Text style={{ marginTop: 6, color: '#E9E6E5', fontWeight: 'lighter'}}>{i18n.t('caption')}</Text>  
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}> 
                <Image source={require('../assets/git.png')} style={{width:15,height:15,marginTop:8,marginLeft:25}}/>
                <TouchableOpacity onPress={() => { Linking.openURL("https://github.com/Percy-Riptide/FarmiAssist.git"); }}>
    <Text style={{color:'#E9172D',marginTop:6}}>{i18n.t('git')}</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Body}>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
    <Text style={{ color: '#fff', fontSize: 20, paddingTop: 10 }}>{i18n.t('developer')}</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View>
                        <Image source={require('../assets/pattu.jpg')} style={{width:140,height:140,marginTop:20}} />
    <Text style={{color:'#fff',fontSize:14}}>{i18n.t('pratik')}</Text>
                    </View>
                        
                    <View>
                        <Image source={require('../assets/manoj.jpg')} style={{width:140,height:140,marginTop:20}}/>
    <Text style={{color: '#fff',fontSize:14}}>{i18n.t('manoj')}</Text>
                        </View>
                      </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Image source={require('../assets/shreya.jpg')} style={{ width: 140, height: 140, marginTop: 20 }} />
    <Text style={{ color: '#fff', fontSize: 14 }}>{i18n.t('shreya')}</Text>
                        </View>

                        <View>
                            <Image source={require('../assets/jyoti.jpg')} style={{ width: 140, height: 140, marginTop: 20 }} />
    <Text style={{ color: '#fff', fontSize: 14 }}>{i18n.t('jyoti')}</Text>
                        </View>
                    </View>
                </View>

             </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#1c1c1c'

    },
    header: {
        flexDirection:'row',
        alignItems:'stretch',
        flex: 1
      //  borderBottomWidth: 1,
      //  borderBottomColor: 'black',

    },
    Main: {
        flex: 4,
        justifyContent: 'center',
        alignItems:'center',
       borderBottomWidth: 1,
       borderBottomColor: '#7b7676',
    
    },
    Body: {
        flex: 6,
    }
})
export default AboutUs;