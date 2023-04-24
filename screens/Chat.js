import { View, Text, StyleSheet, TextInput, ScrollView, Pressable, Image } from 'react-native'
import React, { useRef } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import AMessageContainer from '../components/ChatComponents/AMessageContainer';
import { addDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/firebaseConfig';

export default function Chat() {
    const scrollViewRef = useRef();
    
    // const firstRef = collection(db,'kutta')
    // addDoc(firstRef,{'name':'nameValue','Query':'editorValue'});=

    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} 
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={false}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahahaadfjjdajfbadjkbvjkd daj fadjhf jadlfh adjhf adjfh kadj jkb cxzjkb cjkzxbkbckjXBc jkxz "} ownText={false}/>

                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={false}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={false}/>
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={false}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={false}/>
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={false}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={false}/>
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={false}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={true}/>
                
                <AMessageContainer message={"hahaha"} ownText={false}/>

            </ScrollView>
            <View style={{paddingTop:5}}>
                <TextInput style={styles.messageInput}  multiline={true} placeholder='Write your text'/>
                <Pressable style={styles.sendBtnStyle} onPress={()=>console.log('Send btn pressed')}>
                    <FontAwesome name="send" size={24} color="#0274ed" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding:8,
      flex:1,
    },
    messageInput:{
        height:'auto',
        maxHeight:100,
        borderWidth:2,
        borderRadius:30,
        borderColor:'#0274ed',
        color:'#0274ed',
        padding:10,
        paddingRight:20
        
    },
    sendBtnStyle:{
        position:'absolute',
        right:10,
        height:'100%',
        width:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

});