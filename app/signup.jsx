import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router'


export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bdate, setBdate] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter();


  const MoveToSignIn = () => {
    router.replace('signin')
  }

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', justifyContent: 'center'}}>
        <Text>Legal First Name</Text>
        <TextInput 
        style={styles.Input}
        placeholder="first name in Id"
        value={firstName}
        onChangeText={setFirstName}
        />

        <Text>Legal Last Name</Text>
        <TextInput
        style={styles.Input} 
        placeholder="last name in Id"
        value={lastName}
        onChangeText={setLastName}
        />
        <Text>Date of Birth</Text>
        <TextInput 
        style={styles.Input}
        placeholder="MM/DD/YYYY"
        value={bdate}
        onChangeText={setBdate}
        />
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
        <Text>Confirm Password</Text>
        <TextInput
        style={styles.Input}
        placeholder="confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        />
      </View>
      <Pressable style={styles.button} 
      onPress={()=> {router.replace('(tabs)')}}
      >
        <Text style={{color: "#fff"}}>Submit</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={MoveToSignIn}>
        <Text style={{color: "#fff"}}>Sign In?</Text>
      </Pressable>
      <Text>Edit the signUp page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Input: {
      backgroundColor: '#f0f0f0',
      borderWidth: 2,
      borderRadius: 8,
      padding: 12,
      marginBottom: 15,
      fontSize: 16,
      color: '#333',
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    }
})