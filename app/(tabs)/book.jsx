import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function book() {
  return (
    <View style={styles.container}>
      <Text>Edit the book page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})