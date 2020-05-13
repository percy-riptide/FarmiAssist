import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
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

function HowToUse({ navigation}) {

    return (
        <View style={styles.container}>

            <View style={styles.header}>
            <View>
                <Icon.Button name="ios-menu" size={30} backgroundColor="#1c1c1c" paddingTop={30} onPress={() => navigation.openDrawer()}></Icon.Button>
            </View>
            <View>
                <Text style={{paddingTop: 34, fontSize: 16, paddingHorizontal: 5, color: 'white'}}>{i18n.t('use')}</Text>
            </View>
            </View>
        </View >
         
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c'

    },
    header: {
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1
    }
})
export default HowToUse;