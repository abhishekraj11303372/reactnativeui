import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getToken } from '../../services/AsyncStorageService'

const DashboardScreen = () => {
  const [userLToken,setUserLToken]= useState();
  
  useEffect(()=>{
    (
      async() => {
        const token = await getToken()
        setUserLToken(token);
      })(); 
  })
  
  return (
    <View>
      <Text>DashboardScreen</Text>
      <Text>{userLToken}</Text>
    </View>
  )
}

export default DashboardScreen