import { NativeContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
return(
  <NativeContainer>
    <Stack.Navigator>
      <Stack.Screen name="" component={UserLogin} options={{}} />
    </Stack.Navigator>
  </NativeContainer>
); 
}

