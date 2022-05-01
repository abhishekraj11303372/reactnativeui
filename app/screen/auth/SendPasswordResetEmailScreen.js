import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, toastConfig } from '../../../styles'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useResetUserPasswordEmailMutation } from '../../../services/userAuthApi'

const SendPasswordResetEmailScreen = () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState("");
    const [resetUserPasswordEmail] = useResetUserPasswordEmailMutation();
    const clearTextInput= () => {
        setEmail('')
    };
    
    const handleFormSubmit = async () => {
        if(email) {
            // console.log("Login Success");
            const formData = { email }
            const res = await resetUserPasswordEmail(formData)
            // console.log(formData);
            console.log(res);
           if(res.data.status === "success") {
            clearTextInput();
            Toast.show({    
                type:'done',
                position:'top',
                topOffset:0,
                text1:"Password Reset Email Sent to your mail",
            });
        }

            if(res.data.status === "failed") {
                clearTextInput();
                Toast.show({    
                    type:'warning',
                    position:'top',
                    topOffset:0,
                    text1: res.data.message,
                });
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
                <View style={{marginHorizontal:30,width:200,alignSelf:'center',margin:20}}>
                    <Button title='Submit' onPress={handleFormSubmit} color='purple' />
                </View> 
            </View>    
        </ScrollView> 
    </SafeAreaView>
  )
}

export default SendPasswordResetEmailScreen