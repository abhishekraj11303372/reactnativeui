import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardScreen from './DashboardScreen'
import SideBar from './SideBar';

const Drawer = createDrawerNavigator();

const UserPanelTabScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen name='Dashboard' component={DashboardScreen} ></Drawer.Screen>
      {/* <Drawer.Screen name='Change Password' component={} ></Drawer.Screen>
      <Drawer.Screen name='About us' component={} ></Drawer.Screen> */}
    </Drawer.Navigator>
  )
}

export default UserPanelTabScreen