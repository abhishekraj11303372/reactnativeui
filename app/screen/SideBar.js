import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { removeToken } from '../../services/AsyncStorageService';
import { useSelector } from 'react-redux';

const SideBar = ({...props}) => {
    const handleLogout = async () => {
      await removeToken('token');
        navigation.navigate('Home');
        // console.log("logout");
    }
    
    const navigation =useNavigation();
//getting user data from redux store using useSelector
    const myData = useSelector(state => state.user)
    console.log("mydata",myData)

  return (
    <DrawerContentScrollView {...props}>
        <View style={{margin:15}}>
            <Text>{myData.name}</Text>
            <Text>{myData.email}</Text>
        </View>
        <DrawerItemList {...props}/>
        <DrawerItem label='Logout' onPress={handleLogout}/>
    </DrawerContentScrollView>
  )
}

export default SideBar