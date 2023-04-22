import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ASingleSearchItem from '../AsingleSearchItem'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SearchTab() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>
        <View style={styles.Inputcontainer}>
            <TextInput style={styles.textInputFieldStyle} placeholder='Search for a Person'/>
            <Pressable style={styles.searchEnterBtn}>
                <MaterialCommunityIcons name="account-search-outline" size={24} color="black" />
            </Pressable>
        </View>
        <View>
            <ASingleSearchItem/>
            <ASingleSearchItem/>
            <ASingleSearchItem/>
            <ASingleSearchItem/>
        </View>
        <View style={styles.Inputcontainer}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>No Results Found</Text>
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    Inputcontainer: {
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    textInputFieldStyle:{
        marginBottom:5,
        marginTop:5,
        marginLeft:2,
        marginRight:2,
        padding:10,
        color:'gray',
        borderRadius:5,
        height:60,
        width:"98%",
        fontWeight:'bold',
        borderWidth:2,
        borderColor:'#dcdee0'
    },
    searchEnterBtn:{
        position:'absolute',
        right:-0,
        width:'20%',
        height:'87%',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'transparent'
    }
})