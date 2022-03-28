import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen.js'

const Drawer = createDrawerNavigator();

const ShopTab = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} options={{}} />
    </Drawer.Navigator>
  )
}

export default ShopTab