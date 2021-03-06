import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen.js'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../../../services/AsyncStorageService.js';
import React, { useEffect, useState } from 'react'

const Drawer = createDrawerNavigator();

const ShopTab = () => {
  const [userLToken,setUserLToken]= useState();
  const navigation = useNavigation();
useEffect(() => {
  (async () => {
    const token = await getToken() // get token from async storage
    setUserLToken(token)
  })();
})

const handleUserAuth = () => {
  if(userLToken) {
   navigation.navigate('UserPanelTab', {screen: 'Dashboard'}) 
    console.log("dashboard")
  } else {
  navigation.navigate('UserLogin') 
    console.log("login")
  }
}

  return (
    <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'purple'},headerTintColor:'white',drawerStyle:{backgroundColor:'#F0DEDE'}}}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerTitle:'AR Shop',drawerActiveTintColor:'black',
            headerRight:()=><TouchableWithoutFeedback onPress={handleUserAuth}>{userLToken ? <Text style={{color:'white',fontSize:18,paddingRight:20,fontWeight:'bold'}}>Dashboard</Text> : 
            <Text style={{color:'white',fontSize:18,paddingRight:20,fontWeight:'bold'}}>Login</Text>}
            
        </TouchableWithoutFeedback>}} />
    </Drawer.Navigator>
  )
}

export default ShopTab