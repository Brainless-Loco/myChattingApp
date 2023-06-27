import { View, Text, StyleSheet, TextInput, ScrollView, Pressable, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import AMessageContainer from '../components/ChatComponents/AMessageContainer';
import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/firebaseConfig';
import { useSelector } from 'react-redux';

export default function Chat() {
    const scrollViewRef = useRef();

    const [loading, setloading] = useState(false)
    const [chatMessages, setchatMessages] = useState([])
    const [textMessage, settextMessage] = useState('')



    const hotChatRef = useSelector(state=>state.currentOpenedChatID)
    const userRef = useSelector(state=>state.currentUserId)



    
    const chatRoomsColRef = collection(db,'chatRooms/'+hotChatRef+'/chat')

    const fetchTrial = async ()=>{
        setloading(true)
        const querySnapshot = await getDocs(chatRoomsColRef);
        let tempMessages = []
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            tempMessages = [...tempMessages,doc.data()]
        });
        tempMessages.sort((a, b) => {
            const timeA = new Date(a.time);
            const timeB = new Date(b.time);
            if (timeA < timeB) {
              return -1;
            }
            if (timeA > timeB) {
              return 1;
            }
            return 0;
          });
        setchatMessages(tempMessages)
        setloading(false)
    }


    const sendMessage =  async ()=>{
        if(textMessage.length<1 || loading==true) return;
        const tempDoc = {
            message:textMessage,
            sentBy:userRef,
            seenBy:[],
            messageType:'string',
            time:new Date()
        }
        const docId = await addDoc(chatRoomsColRef,tempDoc)
        setchatMessages([...chatMessages,tempDoc])
        settextMessage('')
    }

    useEffect(() => {
        fetchTrial()
    }, [])


    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} 
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                {loading ? 
                    <ActivityIndicator size={50} color={'#0274ed'} /> :
                    chatMessages.map((doc)=>{
                        return <AMessageContainer key={doc.time} message={doc.message} ownText={doc.sentBy==userRef?true:false}/>
                    })
                }

            </ScrollView>
            <View style={{paddingTop:5}}>
                <TextInput value={textMessage} onChangeText={(e)=>settextMessage(e)} style={styles.messageInput}  multiline={true} placeholder='Write your text'/>
                <TouchableOpacity style={styles.sendBtnStyle} onPress={sendMessage}>
                    <FontAwesome name="send" size={24} color="#0274ed" />
                </TouchableOpacity>
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