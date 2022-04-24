import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, toastConfig } from '../../../styles'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ChangePasswordScreen = () => {
    const navigation = useNavigation();
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleFormSubmit = () => {
        if( confirmPassword && password ) {
            // console.log("Password Changed Successfully");
            const formData = { password, confirmPassword }
            // console.log(formData);
            const clearTextInput= () => {
                setPassword(''),
                setConfirmPassword('')
            };
            Toast.show({
                type:'done',
                position:'top',
                topOffset:0,
                text1:"Password Changed Successfully",
            });
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
                    <Text style={styles.labelText}>New Password</Text>
                    <TextInput value={password} onChangeText={setPassword} placeholder="New Password here" onPress={console.log(password)}secureTextEntry={true} style={styles.input}/>
                </View> 
                <View style={{marginHorizontal:30}}>
                    <Text style={styles.labelText}>Confirm New Password</Text>
                    <TextInput value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm New Password here" onPress={console.log(confirmPassword)} style={styles.input}/>
                </View> 
                <View style={{marginHorizontal:30,width:200,alignSelf:'center',margin:20}}>
                    <Button title='Change Password' onPress={handleFormSubmit} color='purple' />
                </View> 
            </View>    
        </ScrollView> 
    </SafeAreaView>
  )
}

export default ChangePasswordScreen