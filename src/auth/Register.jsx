import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity,Alert } from "react-native";
import styles from './design.js';
import  {registerFun}  from '../services/auth.js';




const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    const handleRegister = async()=>{
       
        
  if(password !== confirmpassword){
    console.log('Error', 'Passwords do not match')
    return
   
  }
  try{
    await registerFun(email,password)
    console.log('succesfully');
    Alert.alert("Account succesfully created")
    setEmail('')
    setPassword('')
    setConfirmpassword('')

}catch(err){
    console.log(err);
    
}
    }
    

    return (

        <View style={styles.container}>
            <Text style={styles.title}>
                Create a new account
            </Text>
            <View style={styles.inputSec}>


                <TextInput inputMode="email"
                    keyboardType="email-address"
                    placeholder="Full Name*"
                    style={styles.input}

                    label="Email"

                ></TextInput>
            </View>

            <View style={styles.inputSec}>



                <TextInput inputMode="email"
                    keyboardType="email-address"
                    placeholder="Email address*"
                    style={styles.input}
                    label="Email"
                    onChangeText={(text) => setEmail(text)}

                ></TextInput>
            </View>
            <View style={styles.inputSec}>

                <TextInput
                    placeholder={"New Password*"}
                    textContentType="password"
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                ></TextInput>
            </View>
            <View style={styles.inputSec}>

                <TextInput
                    placeholder={"Confirm Password*"}
                    textContentType="password"
                    style={styles.input}
                    onChangeText={(text) => setConfirmpassword(text)}
                ></TextInput>
            </View>



            <View style={styles.linkContainer}>

                <TouchableOpacity style={styles.btn} onPress={handleRegister}>
                    <Text style={styles.btnText}>Sign Up

                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomSec}>
                <Text>Already I have an account </Text>
                <TouchableOpacity >
                    <Text style={styles.textColor}>Log In</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Register
