import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, toastConfig } from '../../../styles'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'

const RegisterationScreen = () => {
    const navigation = useNavigation()
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [tc,setTc] = useState(false);

    const handleFormSubmit = () => {
        if(email && password ) {
            console.log("Login Success");
            const formData = { email, password }
            console.log(formData);
            const clearTextInput= () => {
                setEmail(''),
                setName(''),
                setPassword(''),
                setConfirmPassword('')
            };
            Toast.show({
                type:'done',
                position:'top',
                topOffset:0,
                text1:"Login Success",
            })
        }
        else {
            console.log("All Fields are Required");
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
                {/* <View style={{alignSelf:'center' , marginBottom:15}}>
                    <MaterialCommunityIcons name='rocket-launch' size={100} color="purple" />
                </View> */}
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
                    <TextInput value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Password here" onPress={console.log(password)} secureTextEntry={true} style={styles.input}/>
                </View> 
                <View style={{marginHorizontal:40,marginTop:10,marginBottom:5,flex:1, flexDirection:'row'}}>
                    <Checkbox value={tc} onValueChange={setTc} color={tc? 'skyblue' : undefined } />
                    <Text style={styles.labelText}>I agree to term and condition.</Text>
                </View> 
                <View style={{marginHorizontal:30,width:200,alignSelf:'center',margin:20}}>
                    <Button title='Create' onPress={handleFormSubmit} color='purple' />
                </View> 
                <View>
                    <View>
                        <TouchableOpacity onPress={() => {console.log('Password Reset Screen')}}>
                            <Text style={{fontWeight:'bold',alignSelf:'center' , marginBottom:10}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {console.log('New User Registeration Screen')}}>
                            <Text style={{fontWeight:'bold',alignSelf:'center'}}>New User Registeration ?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>    
        </ScrollView> 
    </SafeAreaView>
  )
}

export default RegisterationScreen