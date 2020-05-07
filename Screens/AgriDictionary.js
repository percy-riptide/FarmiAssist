import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


function AgriDictionary({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Icon.Button name="ios-menu" size={30} backgroundColor='#1c1c1c' paddingTop={30} onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{ paddingTop: 35, fontSize: 16, paddingHorizontal: 105, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>More About Crops</Text>
                </View>
                </View>
            <View style={styles.Main}>
                <Text style={{ paddingLeft: 50 }}>Main agri</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',


    },
    header: {

        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'black',

    },
    Main: {
        flex: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alighnItems: 'stretch'
    }
})
export default AgriDictionary;