import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ASingleChat from '../ASingleChat'

export default function AllConversationsTab() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.container}>
        <ASingleChat/>
        <ASingleChat/>
        <ASingleChat/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    }

  });