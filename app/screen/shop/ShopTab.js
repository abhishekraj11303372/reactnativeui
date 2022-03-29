import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen.js'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const ShopTab = () => {
  return (
    <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'purple'},headerTintColor:'white',drawerStyle:{backgroundColor:'#F0DEDE'}}}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerTitle:'AR Shop',drawerActiveTintColor:'black',headerRight:()=><TouchableWithoutFeedback>
            <Text style={{color:'white',fontSize:18,paddingRight:20,fontWeight:'bold'}}>Login</Text>
        </TouchableWithoutFeedback>}} />
    </Drawer.Navigator>
  )
}

export default ShopTab