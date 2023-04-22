import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function ASingleSearchItem() {
  return (
    <Pressable style={styles.container}>
        <Image style={styles.imageStyle} source={require('../assets/images/avatar.png')}/>
        <View style={styles.midContainerStyle}> 
            <Text style={styles.chatNameStyle}>Dhinka Chika Dhin</Text>
        </View>
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
        margin:2,
        padding:7
    },
    imageStyle:{
        height:45,
        width:45,
        borderRadius:50
    },
    midContainerStyle:{
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'row',
        width:'80%'
    },
    chatNameStyle:{
        fontSize:17,
        fontWeight:'bold',
    }

  });