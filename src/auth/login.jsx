import React,{useState} from "react";
import { View, Text, TextInput, Alert, TouchableOpacity,Image } from "react-native";
import styles from "./design.js";
import { LoginFun } from "../services/auth.js";

const Login = () => {
  const [lemail,setLemail] = useState('')
  const [lpassword,setLpassword] = useState('')


  
  const handleLogin = async () => {
    // if(lemail || lpassword){
    //   Alert.alert("please fill all inputs")
    //   return
    // }
    try{
      await LoginFun(lemail,lpassword)
      console.log("succesfully logged in");
    setLemail('')
    setLpassword('')
      

    }catch(error){
  Alert.alert('authntication error')
  console.log(error);
  
    }
    
    
  };

 

  return (
    <View style={styles.container}>
      <View>
      <Image
        source={require('../assets/images/logo.png')} // Replace with the path to your logo
        style={styles.logo}
      /> 
      </View>
      <Text style={styles.title}>
        Login
      </Text>

      <View style={styles.inputSec}>


        <TextInput inputMode="email"
          keyboardType="email-address"
          placeholder="Email address*"
          style={styles.input}
          onChangeText={(text)=>setLemail(text)}

          

        ></TextInput>
      </View>
      <View style={styles.inputSec}>

        <TextInput
          placeholder={"Password*"}
          textContentType="password"
          style={styles.input}
          secureTextEntry
          onChangeText={(text)=>setLpassword(text)}
        ></TextInput>
      </View>
      <View style={styles.forText}>
        <Text style={styles.textColor}>Forget Password</Text>
      </View>


      <View style={styles.linkContainer}>

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSec}>
        <Text>Don't have an account</Text>
        <TouchableOpacity >
          <Text style={styles.textColor}>Sign Up</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default Login;