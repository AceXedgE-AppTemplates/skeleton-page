import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react'

export default function signin() {
  const router = useRouter()

  const handleSignIn = () => {
    router.replace('(tabs)')
  }

  return (
    <View style={styles.container}>
      <Text>Edit the signIn page</Text>
      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={{color: "#fff"}}>Sign In</Text>
      </Pressable>
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