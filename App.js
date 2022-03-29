import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLoginScreen from './app/screen/auth/UserLoginScreen';
import ShopTab from "./app/screen/shop/ShopTab";

const Stack = createNativeStackNavigator();

export default function App() {
return(
  <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerStyle:{backgroundColor:'purple'}}}>
      <Stack.Screen name="ShopTab" component={ShopTab} options={{headerShown:false}} />
      <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{}} />
    </Stack.Navigator>
  </NavigationContainer>
); 
}

