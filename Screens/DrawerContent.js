import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTheme,Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
                            <Title style={styles.title}>Farmi-Assist</Title>
                            <Caption style={styles.caption}>Extending your hand to help</Caption>
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
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home')}}
                        />
                        <DrawerItem icon={({ color, size }) =>
                            (
                                <Icon
                                    name='help'
                                    color={color}
                                    size={size}
                                />
                            )}
                                label="How to use App"
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
                            label="Agricultural Library"
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
                            label="About"
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
        flex: 1
    },
    userInfoSection:{
        paddingLeft: 20,
        borderBottomColor:'#ffffff'
            },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
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
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
   
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },

    
})
export default DrawerContent;