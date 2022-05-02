import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles, toastConfig } from '../../../styles'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useChangeUserPasswordMutation } from '../../../services/userAuthApi'
import { getToken } from '../../../services/AsyncStorageService'

const ChangePasswordScreen = () => {
    const navigation = useNavigation();
    const [password,setPassword] = useState("");
    const [confirm_password,setConfirmPassword] = useState("");
    const [changeUserPassword] = useChangeUserPasswordMutation();

    const [userLToken,setUserLToken]= useState();
  
  useEffect(()=>{
    (
      async() => {
        const token = await getToken()
        setUserLToken(token);
      })(); 
  })

  const clearTextInput= () => {
    setPassword(''),
    setConfirmPassword('')
};
    const handleFormSubmit = async () => {
        console.log("cliccked")
        console.log(password+" "+confirm_password)
        if( password && confirm_password ) {
            console.log("condition 1")
            // console.log("Password Changed Successfully");
            if(password === confirm_password) {
                console.log("condition 2")
                const formdata = { password, confirm_password }
                const res = await changeUserPassword({formdata,userLToken});
                console.log("form",formdata);
                console.log("res",res)
                console.log("status"+res.data.status)
                if(res.data.status === "success") {
                    clearTextInput();
                    Toast.show({
                        type:'done',
                        position:'top',
                        topOffset:0,
                        text1:"Password Changed Successfully",
                    });
                }
                
                if(res.data.status === "failed") {
                    clearTextInput();
                    Toast.show({
                        type:'warning',
                        position:'top',
                        topOffset:0,
                        text1:res.data.message,
                    });
                }


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
                    <Text style={styles.labelText}>New Password</Text>
                    <TextInput value={password} onChangeText={setPassword} placeholder="New Password here" secureTextEntry={true} style={styles.input}/>
                </View> 
                <View style={{marginHorizontal:30}}>
                    <Text style={styles.labelText}>Confirm New Password</Text>
                    <TextInput value={confirm_password} onChangeText={setConfirmPassword} placeholder="Confirm New Password here"  style={styles.input}/>
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