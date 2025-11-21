import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router'

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSignIn = () => {
    router.replace('(tabs)')
  }
  const MoveToSignUp = () => {
    router.replace('signup')
  }

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', justifyContent: 'center'}}>
         <Text>Email Address</Text>
            <TextInput 
            style={styles.Input}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            />
            <Text>Password</Text>
            <TextInput 
            style={styles.Input}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            />
      </View>
      <Text>Edit the signIn page</Text>
      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={{color: "#fff"}}>Sign In</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={MoveToSignUp}>
        <Text style={{color: "#fff"}}>Sign Up?</Text>
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
    },
    Input: {
      backgroundColor: '#f0f0f0',
      borderWidth: 2,
      borderRadius: 8,
      padding: 12,
      marginBottom: 15,
      fontSize: 16,
      color: '#333',
    }
})