import { View, Text, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function ASingleChat({navigation}) {
  return (
    <Pressable  onPress={()=>{navigation.navigate('chat')}} style={styles.container}>
        <Image style={styles.imageStyle} source={require('../assets/images/avatar.png')}/>
        <View style={styles.midContainerStyle}> 
            <Text style={styles.chatNameStyle}>Dhinka Chika Dhin</Text>
            <Text>Total: 32 texts</Text>
        </View>
        <Pressable style={styles.deleteBtnContainerStyle}><Ionicons name="trash" size={24} color="#9c0615"/></Pressable>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius:5,
        gap:12,
        margin:5,
        marginBottom:2,
        marginTop:2,
        padding:7
    },
    imageStyle:{
        height:60,
        width:60,
        borderRadius:50
    },
    midContainerStyle:{
        display:'flex',
        justifyContent:'flex-end',
        flexDirection:'column',
        width:'65%'
    },
    chatNameStyle:{
        fontSize:17,
        fontWeight:'bold',
        color:'#0274ed'
    },
    deleteBtnContainerStyle:{
        height:'100%',
        width:'10%',
        display:'flex',
        alignItems:'center',
        flexDirection:'row'
    }

  });