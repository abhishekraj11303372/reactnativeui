import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getToken } from '../../services/AsyncStorageService'
import { useGetLoggedUserQuery } from '../../services/userAuthApi'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../features/userSlice'

const DashboardScreen = () => {
  const [userLToken,setUserLToken]= useState();
  
  useEffect(()=>{
    (
      async() => {
        const token = await getToken()
        setUserLToken(token);
      })(); 
  })
  
  const {data,isSuccess} = useGetLoggedUserQuery(userLToken)
  console.log("User data",data)

  //user data in redux store from reducer
  const dispatch = useDispatch();
  useEffect(() => {
    if(isSuccess) {
      dispatch(setUserInfo({email: data.user.email, name: data.user.name}))
    }
  })

  return (
    <View>
      <Text>DashboardScreen</Text>
      <Text>{userLToken}</Text>
    </View>
  )
}

export default DashboardScreen