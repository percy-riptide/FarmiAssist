import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';





function AboutUs({ navigation}) {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View >
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#1c1c1c" paddingTop={30} onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{ paddingTop: 35,fontSize:16, paddingHorizontal:130, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>About</Text>
                </View>
                </View>
            <View style={styles.Main}>
                <Image source={require('../assets/icon.png')} style={{ width: 70, height: 70, paddingTop: 15 }} />
                <Text style={{ color: '#F5F5F5', fontWeight: 'bolder',fontSize:16, marginTop: 6 }}>Farmi-Assist</Text>
                <Text style={{ color: '#F5F5F5', marginTop: 6 }}>Version 1.0</Text>
                
               <Text style={{ marginTop: 6, color: '#E9E6E5', fontWeight: 'lighter'}}>Extending Your hand to help....</Text>  
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}> 
                <Image source={require('../assets/git.png')} style={{width:15,height:15,marginTop:8,marginLeft:25}}/>
                <TouchableOpacity onPress={() => { Linking.openURL("https://github.com/Percy-Riptide/FarmiAssist.git"); }}>
                    <Text style={{color:'#E9172D',marginTop:6}}>Our Git Repositry</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Body}>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                    <Text style={{ color: '#fff', fontSize: 20, paddingTop: 10 }}>Developers</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View>
                        <Image source={require('../assets/pattu.jpg')} style={{width:140,height:140,marginTop:20}} />
                            <Text style={{color:'#fff',fontSize:14}}>Pratik Patil</Text>
                    </View>
                        
                    <View>
                        <Image source={require('../assets/manoj.jpg')} style={{width:140,height:140,marginTop:20}}/>
                            <Text style={{color: '#fff',fontSize:14}}>Manoj Kumar</Text>
                        </View>
                      </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Image source={require('../assets/shreya.jpg')} style={{ width: 140, height: 140, marginTop: 20 }} />
                            <Text style={{ color: '#fff', fontSize: 14 }}>Shreya Patil</Text>
                        </View>

                        <View>
                            <Image source={require('../assets/jyoti.jpg')} style={{ width: 140, height: 140, marginTop: 20 }} />
                            <Text style={{ color: '#fff', fontSize: 14 }}>Jyoti Kumar</Text>
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