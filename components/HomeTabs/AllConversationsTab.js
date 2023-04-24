import { StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import ASingleChat from '../ASingleChat'
import { auth, db } from '../../firebase/firebaseConfig'
import { addDoc, collection, collectionGroup, getDoc, getDocs, orderBy, where } from 'firebase/firestore/lite'
import { query } from 'firebase/database'

export default function AllConversationsTab({navigation}) {

  const chatRoomsRef = collection(db,'chatRooms')
    const q = query(chatRoomsRef, where("members", "array-contains", "tonmoydas961179@gmail.com"), orderBy("lastText_time"));

    const getAllConversations = async ()=>{
      try{
        const querySnapshot = await getDocs(q)
        // console.log(querySnapshot.size)
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
        });
      }
      catch(e){
          console.log(e)
      }
      finally{
        
      }
    }
    getAllConversations()


    const trying = ()=>{

    }

  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.container}>
        <ASingleChat navigation={navigation} roomId={"sdssd"}/>
        <ASingleChat navigation={navigation}/>
        <ASingleChat navigation={navigation}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingTop:4
    }

  });