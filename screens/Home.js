import {StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllConversationsTab from '../components/HomeTabs/AllConversationsTab';
import SearchTab from '../components/HomeTabs/SearchTab';
import Profile from '../components/HomeTabs/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Home() {

    const dispatch = useDispatch()
    



    return (
        <Tab.Navigator initialRouteName='chats' screenOptions={{headerShown:false,tabBarLabelStyle:{display:'none'}}} >
            <Tab.Screen name="search" component={SearchTab} options={{tabBarIcon:()=>{return <FontAwesome5 name="search" size={24} color="gray" />}}}/>
            <Tab.Screen name="chats" component={AllConversationsTab}  options={{tabBarIcon:()=>{return <Entypo name="chat" size={24} color="gray" />}}}/>
            <Tab.Screen name='profile' component={Profile}  options={{tabBarIcon:()=>{return <Ionicons name="person-sharp" size={24} color="gray" />}}}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  