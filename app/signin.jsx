import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function signin() {
  return (
    <View style={styles.container}>
      <Text>Edit the signIn page</Text>
      <Link href="./(tabs)" asChild>
        <Pressable style={styles.button}>
          <Text style={{color: "#fff"}}>Sign In</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    }
})