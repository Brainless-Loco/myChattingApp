import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function LogIn({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, seterrorMessage] = useState('')

    const loginUser = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigation.navigate('home')
        } catch (e) {
          if(e.code==='auth/wrong-password') seterrorMessage("Wrong Password")
          if(e.code==='auth/user-not-found') seterrorMessage('No account matches this email')
        }
      };

    const onLoginPress = () => {
        // loginUser()
        
        navigation.navigate('home')
    }

    return (
        <ScrollView style={styles.container}>
            <Ionicons name="chatbubbles-sharp" size={150} style={styles.logo} />
            <Text style={[styles.logo,styles.title]}>My Chat</Text>
            <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => {setEmail(text);  seterrorMessage('');}}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => {setPassword(text); seterrorMessage('')}}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                {errorMessage.length>0 && <Text style={{color:'red',textAlign:'center'}}>*{errorMessage}*</Text>}
                <TouchableOpacity
                    disabled={password.length==0 || email.length==0}
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>{"Log in"}</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={()=>{
                        setEmail('');
                        setPassword('');
                        navigation.navigate('signup')}} style={styles.footerLink}>Sign up</Text></Text>
                </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
    },
    title: {
        fontSize:22,
        fontWeight:'600',
        fontStyle:'italic',
        marginBottom:20
    },
    logo: {
        textAlign:'center',
        color:"#0274ed"
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        color:'#5591ad',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#0274ed',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})