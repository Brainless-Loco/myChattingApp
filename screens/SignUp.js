import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth, db } from '../firebase/firebaseConfig';
import { Timestamp, addDoc, collection, doc, refEqual, setDoc, updateDoc } from 'firebase/firestore/lite';
import { child, getDatabase, ref, set } from "firebase/database";

export default function SignUp({navigation}) {

    const [userName, setUserName]= useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [errorMessage, seterrorMessage] = useState('')

    const setAllNone = ()=>{
        seterrorMessage('')  
        setEmail('')
        setPassword('')
        setconfirmPassword('')
        setUserName('')
    }

    const doFireBaseUpdate = async ()=>{
        const usersRef = collection(db,'users')
        const docRef = await addDoc(usersRef,{
            "userName":userName,
            "email":email,
            "dp_url":"",
            "chatRooms":[],
            "joiningDate": Timestamp.fromDate(new Date()),
            "user_id":''
        });
        updateDoc(doc(db,"users",docRef.id),{"user_id":docRef.id})
    }
    

    const registerWithEmail = async () => {
        try {
            const {user} = await createUserWithEmailAndPassword(auth,email, password)
            setAllNone()
            doFireBaseUpdate()
            alert("Account Created! You can now Log In.");
        }
        catch(e){
            if(e.code==='auth/email-already-in-use') seterrorMessage("Email has already been used")
            if(e.code==='auth/weak-password') seterrorMessage("Password Must be of at least 6 length")
        }
    }


    const onLoginPress = () => {
        console.log("Log in")
    }

    const onSingUpPress = async ()=>{
        if(email.length>0 && password.length>0) {
            if(password===confirmPassword) registerWithEmail()
            else seterrorMessage("Passwords do not match")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Ionicons name="chatbubbles-sharp" size={150} style={styles.logo} />
            <Text style={[styles.logo,styles.title]}>My Chat</Text>
            <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='User Name'
                    onChangeText={(text) => {setUserName(text);  seterrorMessage('');}}
                    value={userName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
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
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm password'
                    onChangeText={(text) => {setconfirmPassword(text);   seterrorMessage('');}}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                {errorMessage.length>0 && <Text style={{color:'red',textAlign:'center'}}>*{errorMessage}*</Text>}
                <TouchableOpacity
                    disabled={password.length==0 || email.length==0}
                    style={styles.button}
                    onPress={() => onSingUpPress()}>
                    <Text style={styles.buttonTitle}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already have an account? <Text onPress={()=>{
                        setEmail('');
                        setPassword('');
                        setUserName('');
                        setconfirmPassword('');
                        navigation.navigate('login')
                        }} style={styles.footerLink}>Log In</Text></Text>
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