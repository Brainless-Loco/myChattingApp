import { View, Text, StyleSheet, TextInput, ScrollView, Pressable, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import AMessageContainer from '../components/ChatComponents/AMessageContainer';
import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/firebaseConfig';
import { useSelector } from 'react-redux';

export default function Chat() {
    const scrollViewRef = useRef();

    const [loading, setloading] = useState(true)



    const hotChatRef = useSelector(state=>state.currentOpenedChatID)
    console.log(hotChatRef)
    
    const chatRoomsColRef = collection(db,'chatRooms/6jLrAY6hAhJhjNsHY16S/chat')

    const fetchTrial = async ()=>{
        const querySnapshot = await getDocs(chatRoomsColRef);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            // console.log(doc)

            return;
        });
    }

    useEffect(() => {
        fetchTrial()
    }, [])


    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} 
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                {loading ? <ActivityIndicator size={50} color={'#0274ed'} /> :

                    <>
                        <AMessageContainer message={"hahahaadfjjdajfbadjkbvjkd daj fadjhf jadlfh adjhf adjfh kadj jkb cxzjkb cjkzxbkbckjXBc jkxz "} ownText={false}/>

                
                        <AMessageContainer message={"hahaha"} ownText={true}/>

                        <AMessageContainer message={"hahaha"} ownText={false}/>

                        <AMessageContainer message={"hahaha"} ownText={true}/>

                        <AMessageContainer message={"hahaha"} ownText={true}/>

                        <AMessageContainer message={"hahaha"} ownText={false}/>
                    
                    </>
                }

            </ScrollView>
            <View style={{paddingTop:5}}>
                <TextInput style={styles.messageInput}  multiline={true} placeholder='Write your text'/>
                <Pressable disabled={loading} style={styles.sendBtnStyle} onPress={()=>console.log('Send btn pressed')}>
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
        right:1,
        height:'100%',
        width:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        top:'5%',
    },

});