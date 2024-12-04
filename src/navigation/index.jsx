import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FakeData from '../screens/FakeData';
import UIcon from 'react-native-vector-icons/FontAwesome';
import NavIcon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import ProductList from '../screens/ProductList';



const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (

  <Stack.Navigator initialRouteName="home">
  <Stack.Screen options={{
    headerStyle :{
    backgroundColor:"black",
    headerTitleAlign:"center"
    },
    
    headerRight:()=><UIcon name ="user" style={styles.text}/>,
    headerLeft:()=><NavIcon name ="navicon" style={styles.text}/>,
    headerTitle:()=>{
        return (
            <View>
               <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
            </View>
        )
    }
  }} name="home" component={Home} />
  <Stack.Screen name='fake' component={FakeData}/>
 
  
  
    <Stack.Screen name="productlists" component={ProductList}/>
  </Stack.Navigator>

  )
}

export default AppNavigation


const styles = StyleSheet.create({
    logo:{
        width:200,
        height:50,
        objectFit:"contain",
        
        
    },
    text:{
      color:"white",
      fontSize:20
    }
})
