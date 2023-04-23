import { View, Text, Image, Pressable, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";

export default function Profile({navigation}) {

  const signOutBtn = ()=>{
    signOut(auth)
    navigation.navigate('login')
  }

  
const storage = getStorage();

const mountainsRef = ref(storage, '../../assets/images/avater.png');

  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{backgroundColor:'white'}}>


      {/* New Profile Picture Upload */}
      <Pressable style={styles.imageUploadButtonContainer}>
        <Image style={styles.imageStyle} source={require('../../assets/images/avatar.png')}/>
        <View style={styles.overlayEffect}>
            <Text style={{fontWeight:'bold',color:'cyan'}}>Click to upload new</Text>
        </View>
      </Pressable>

    {/* Change User Name */}

    <View style={{margin:5}}>
      <TextInput style={styles.textInputStyle} placeholder='User Name'/>
      <TextInput style={styles.textInputStyle} placeholder='Password'/>
      <TextInput style={styles.textInputStyle} placeholder='Confirm Password'/>
    </View>

      <TouchableOpacity style={styles.updateProfileBtn}>
        <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Update Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutBtn} onPress={signOutBtn}>
        <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Sign Out</Text>
      </TouchableOpacity>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageUploadButtonContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'auto',
    padding:10,
    margin:5
  },
  imageStyle:{
    height:250,
    width:250,
    borderWidth:3,
    borderColor:'#0274ed',
    borderRadius:125
  },
  overlayEffect:{
    height:250,
    width:250,
    backgroundColor:'gray',
    opacity:0.8,
    position:'absolute',
    borderRadius:125,
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    borderWidth:3,
    borderColor:'#0274ed',
  },
  textInputStyle:{
    borderWidth:2,
    borderColor:'#0274ed',
    borderRadius:30,
    height:50,
    color:'#0274ed',
    padding:10,
    fontWeight:'bold',
    marginBottom:10
  },
  updateProfileBtn:{
    backgroundColor:'#0274ed',
    height:50,
    borderRadius:25,
    margin:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:12
  },
  signOutBtn:{
    display:'flex',
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    backgroundColor:'#a32121',
    width:'60%',
    height:50,
    borderRadius:25,
    textAlign:'center',
  }
})