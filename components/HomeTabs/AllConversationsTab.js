import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ASingleChat from '../ASingleChat'

export default function AllConversationsTab({navigation}) {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.container}>
        <ASingleChat navigation={navigation}/>
        <ASingleChat navigation={navigation}/>
        <ASingleChat navigation={navigation}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    }

  });