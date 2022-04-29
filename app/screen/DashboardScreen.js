import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getToken } from '../../services/AsyncStorageService'
import { useGetLoggedUserQuery } from '../../services/userAuthApi'

const DashboardScreen = () => {
  const [userLToken,setUserLToken]= useState();
  
  useEffect(()=>{
    (
      async() => {
        const token = await getToken()
        setUserLToken(token);
      })(); 
  })
  
  const {data} = useGetLoggedUserQuery(userLToken)
  console.log("User data",data)

  return (
    <View>
      <Text>DashboardScreen</Text>
      <Text>{userLToken}</Text>
    </View>
  )
}

export default DashboardScreen