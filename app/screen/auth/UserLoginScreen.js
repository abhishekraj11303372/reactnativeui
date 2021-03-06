import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, toastConfig } from '../../../styles'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useLoginUserMutation } from '../../../services/userAuthApi'
import { storeToken } from '../../../services/AsyncStorageService'

const UserLoginScreen = () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [loginUser] = useLoginUserMutation();

    const clearTextInput= () => {
        setEmail(''),
        setPassword('')
    };

    const handleFormSubmit = async () => {
        if(email && password ) {
            // console.log("Login Success");
            const formData = { email, password }
            const res = await loginUser(formData);
            // console.log(formData);
            if(res.data.status === "success") {
                console.log(res);
            console.log(formData);
            //Store Token in storage
            await storeToken(res.data.token);
            clearTextInput();
            navigation.navigate('UserPanelTab')
            }

            if(res.data.status === "failed") {
                console.log(res);
            console.log(formData);
            clearTextInput();
            Toast.show({
                type:'done',
                position:'top',
                topOffset:0,
                text1: res.data.message,
            })
            }
        }
        else {
            // console.log("All Fields are Required");
            Toast.show({
                type:'warning',
                position:'top',
                topOffset:0,
                text1:"All Field are Required",
            })
        }
    }

  return (
    <SafeAreaView>
        <Toast config={toastConfig} />
        <ScrollView>
            <View>
                <View style={{alignSelf:'center' , marginBottom:15}}>
                    <MaterialCommunityIcons name='rocket-launch' size={100} color="purple" />
                </View>
                <View style={{marginHorizontal:30,marginBottom:10}}>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput value={email} onChangeText={setEmail} placeholder="Email here" onPress={console.log(email)} keyboardType='email-address' style={styles.input}/>
                </View> 
                <View style={{marginHorizontal:30}}>
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput value={password} onChangeText={setPassword} placeholder="Password here" onPress={console.log(password)} secureTextEntry={true} style={styles.input}/>
                </View> 
                <View style={{marginHorizontal:30,width:200,alignSelf:'center',margin:20}}>
                    <Button title='Login' onPress={handleFormSubmit} color='purple' />
                </View> 
                <View>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('SendPasswordResetEmail')}>
                            <Text style={{fontWeight:'bold',alignSelf:'center' , marginBottom:10}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Registeration')}>
                            <Text style={{fontWeight:'bold',alignSelf:'center'}}>New User Registeration ?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>    
        </ScrollView> 
    </SafeAreaView>
  )
}

export default UserLoginScreen