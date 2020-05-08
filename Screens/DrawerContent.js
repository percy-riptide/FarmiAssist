import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTheme,Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Localize from 'expo-localization';
import i18n from 'i18n-js';
import en from './Languages/en.json';
import kn from './Languages/kn.json'

const trans={
    en: ()=>require('./Languages/en.json'),
    kn: ()=>require('./Languages/kn.json')
}

i18n.translations = { kn, en };


//i18n.locale = "kn";

function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent:'center' }}>
                            <Image source={require('../assets/icon.png')} style={{ width: 60, height: 60}} />
                        </View>
                        <View style={{flexDirection:'column', alignItems:'center'}}>
                            <Title style={styles.title}>{i18n.t('appname')}</Title>
    <Caption style={styles.caption}>{i18n.t('caption')}</Caption>
                        </View>
                    </View>
                    <Drawer.Section style='styles.drawerSection'>
                        <DrawerItem icon={({ color, size }) =>
                            (
                                <Icon
                                    name='home'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={i18n.t('language')}
                            onPress={() => { props.navigation.navigate('Language')}}
                            />
                        <DrawerItem   icon={({ color, size }) =>
                            (
                                <Icon
                                    name='help'
                                    color={color}
                                    size={size}
                                />
                            )}
                                label={i18n.t('use')}
                                onPress={() => {props.navigation.navigate('How To Use') }}
                        />
                        <DrawerItem icon={({ color, size }) =>
                            (
                                <Icon
                                    name='library'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={i18n.t('library')}
                                onPress={() => {props.navigation.navigate('Agricultural Dictionary')}}
                        />
                        <DrawerItem icon={({ color, size }) =>
                            (
                                <Icon
                                    name='information'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={i18n.t('about')}
                                onPress={() => {props.navigation.navigate('About') }}
                        />
                        
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
            
        </View>
        )
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
     //    backgroundColor:'#1c1c1c'
    },
    userInfoSection:{
        paddingLeft: 20,
        borderBottomColor:'#ffffff'
            },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        //color:'#fff'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        //color:'#fff'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        color:"#fff"
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
        color:"#fff"
    },
   
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },

    
})
export default DrawerContent;