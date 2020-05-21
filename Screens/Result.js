import React from 'react';
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native';
import * as Data from '../scripts/final.json'
import * as Speech from 'expo-speech'
import i18n from 'i18n-js'
import { ScrollView } from 'react-native-gesture-handler';
 export default function Result({route,navigation}){
    const {val} = route.params
    const {val1} = route.params
    var a = val1-1
    var rows = [];
    for(var i=0;i<=a;i++){
        rows.push(Object.values(val)[i])
    }     
    var arr =[]
    for(var j =0;j<=a;j++){
        arr[j]={key:j,out:rows[j]}
    }
    
    return(
        <View>
            <View style={{alignItems:'center',justifyContent:'center',padding:44}}><Text style={{color:'#ffffff',textAlign:'center',fontSize:22,paddingTop:20}}>{i18n.t('result')}</Text></View>
            <ScrollView>
             <FlatList data={arr}
             renderItem={({item})=><TouchableOpacity keyboardAppearance = "dark" onPress={async()=>{Speech.stop(),Speech.speak(item.out)}}><Text style={{borderRadius:24,width: '95%', color: '#ffffff', padding: 15, fontSize: 20 ,borderWidth:1,margin:5}}>{item.out}</Text></TouchableOpacity>} />
              <TouchableOpacity
                       
                       onPress = {()=>{Speech.stop(),navigation.navigate('Home',{"val":i18n.locale})}} 
                        style={{
                            alignItems: 'center',
                            padding: 10,
                            marginHorizontal: 70,
                            marginTop:10,
                            backgroundColor: '#79d488',
                            borderRadius: 24
                        }}>
                        <Text style={{color:'#ffffff', alignItems:'center', justifyContent:'center', fontSize:18}}>{i18n.t('ok')}</Text></TouchableOpacity>
      </ScrollView>
        </View>
    )
 }
 const styles=StyleSheet.create({
     container: {
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#1c1c1c'
     }
 })