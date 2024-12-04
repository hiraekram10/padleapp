
import React from 'react';
import AppNavigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native'
import AppDrawer from './src/navigation/drawer';


const App = ()=> {
  return (
<NavigationContainer>
<AppNavigation/>
</NavigationContainer>
  )      
 
}

export default App;