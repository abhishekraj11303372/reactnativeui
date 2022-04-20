import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const SideBar = ({...props}) => {
    const navigation =useNavigation();
    const handleLogout = () => {
        navigation.navigate('Home');
        console.log("logout");
    }
  return (
    <DrawerContentScrollView {...props}>
        <View style={{margin:15}}>
            <Text>Abhishek</Text>
            <Text>Abhishekraj1130@gmail.com</Text>
        </View>
        <DrawerItemList {...props}/>
        <DrawerItem label='Logout' onPress={handleLogout}/>
    </DrawerContentScrollView>
  )
}

export default SideBar