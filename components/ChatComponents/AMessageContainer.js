import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function AMessageContainer({message,ownText}) {
  return (
    <View style={[styles.amessageContainer,{flexDirection: ownText==false?'row':'row-reverse'}]}>
        <Image style={styles.profilePicture} source={require('../../assets/images/avatar.png')}/>
        <Text style={styles.aMessage} >{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    amessageContainer:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:3,
        marginBottom:10,
    },
    profilePicture:{
        height:38,
        width:38,
        borderRadius:19
    },
    aMessage:{
        minHeight:40,
        height:'auto',
        backgroundColor:'#0274ed',
        padding:10,
        borderRadius:20,
        color:'white',
        maxWidth:'75%'
    }

});