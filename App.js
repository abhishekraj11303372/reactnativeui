import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLoginScreen from './app/screen/auth/UserLoginScreen';
import ShopTab from "./app/screen/shop/ShopTab";
import RegistrationScreen from "./app/screen/auth/RegisterationScreen";
import SendPasswordResetEmailScreen from "./app/screen/auth/SendPasswordResetEmailScreen";
import UserPanelTabScreen from "./app/screen/UserPanelTabScreen";

import { store } from './app/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

function App() {
return(
  <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerStyle:{backgroundColor:'purple'},headerTintColor:'white'}}>
      <Stack.Screen name="ShopTab" component={ShopTab} options={{headerShown:false}} />
      <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{title: 'User Login'}} />
      <Stack.Screen name="Registeration" component={RegistrationScreen} options={{title: 'Registeration',headerBackVisible:false}} />
      <Stack.Screen name="SendPasswordResetEmail" component={SendPasswordResetEmailScreen} options={{title: 'Password Password'}} />
      <Stack.Screen name="UserPanelTab" component={UserPanelTabScreen} options={{title: 'User Panel',headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
); 
}

export default () => {
  return(
    <Provider store={store}>
    <App />
    </Provider>,
  rootElement

  )
}
