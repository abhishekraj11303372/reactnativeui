import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, toastConfig } from '../../../styles'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'
import { useRegisterUserMutation } from '../../../services/userAuthApi'
import { storeToken } from '../../../services/AsyncStorageService'

const RegisterationScreen = () => {
    const navigation = useNavigation()
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm_password,setConfirmPassword] = useState("");
    const [tc,setTc] = useState(false);

    const [registerUser] = useRegisterUserMutation()

    const clearTextInput= () => {
                    setEmail(''),
                    setName(''),
                    setPassword(''),
                    setConfirmPassword('')
                    setTc(false)
                };

    const handleFormSubmit = async () => {
        if(email && password && name && confirm_password && tc) {
            if(password===confirm_password) {
                // console.log("Account Created Successfully");
            const formData = { name, email, password, confirm_password, tc }
            const res = await registerUser(formData)
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

            } else {
                Toast.show({
                    type:'warning',
                    position:'top',
                    topOffset:0,
                    text1:"Password does not matches",
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
                <View style={{marginHorizontal:30,marginBottom:10}}>
                    <Text style={styles.labelText}>Name</Text>
                    <TextInput value={name} onChangeText={setName} placeholder="Name here" onPress={console.log(email)} keyboardType='name-phone-pad' style={styles.input}/>
                </View> 
                <View style={{marginHorizontal:30}}>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput value={email} onChangeText={setEmail} placeholder="Email here" onPress={console.log(password)} keyboardType='email-address' style={styles.input}/>
                </View> 
                 
                <View style={{marginHorizontal:30,marginBottom:10}}>
                    <Text style={styles.labelText}>Password</Text>
                    <TextInput value={password} onChangeText={setPassword} placeholder="Password here" onPress={console.log(email)} secureTextEntry={true} style={styles.input}/>
                </View> 
                <View style={{marginHorizontal:30}}>
                    <Text style={styles.labelText}>Confirm Password</Text>
                    <TextInput value={confirm_password} onChangeText={setConfirmPassword} placeholder="Password here" onPress={console.log(password)} secureTextEntry={true} style={styles.input}/>
                </View> 
                <View style={{marginHorizontal:40,marginTop:20,flex:1, flexDirection:'row'}}>
                    <Checkbox value={tc} onValueChange={setTc} color={tc? 'skyblue' : undefined } />
                    <Text style={styles.labelText}>I agree to term and condition.</Text>
                </View> 
                <View style={{marginHorizontal:30,width:200,alignSelf:'center',margin:20}}>
                    <Button title='Create' onPress={handleFormSubmit} color='purple' />
                </View> 
                <View>
                    <View>
                        <TouchableOpacity onPress={() => {navigation.navigate('UserLogin')}}>
                            <Text style={{fontWeight:'bold',alignSelf:'center'}}>Already Registered ?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>    
        </ScrollView> 
    </SafeAreaView>
  )
}

export default RegisterationScreen