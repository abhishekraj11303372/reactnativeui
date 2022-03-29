import { View, Text, Button, TextInput } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../../styles'

const UserLoginScreen = () => {
    const [email,SetEmail] = useState("");
    const [password,SetPassword] = useState("");

    const handleFormSubmit = () => {
        if(email && password ) {
            console.log("Login Success");
        }
        else {
            console.log("All Fields are Required");
        }
    }

  return (
    <SafeAreaView>
        <View>
            <View style={{marginHorizontal:30,marginBottom:10}}>
                <Text style={styles.labelText}>Email</Text>
                <TextInput value={email} onChangeText={SetEmail} placeholder="Email here" onPress={console.log(email)} keyboardType='email-address' style={styles.input}/>
            </View> 
            <View style={{marginHorizontal:30}}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput value={password} onChangeText={SetPassword} placeholder="Password here" onPress={console.log(password)} secureTextEntry={true} style={styles.input}/>
            </View> 
            <View style={{marginHorizontal:30,width:200,alignSelf:'center',margin:20}}>
                <Button title='Login' onPress={handleFormSubmit} color='purple' />
            </View> 
            
        </View>     
    </SafeAreaView>
  )
}

export default UserLoginScreen