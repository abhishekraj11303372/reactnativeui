import { StyleSheet,View, Text } from "react-native";

const styles = StyleSheet.create({
    labelText: {
      marginBottom:5,
      marginLeft:10,
      fontSize:16,
      fontWeight:'bold',
    },
    input: {
      height:40,
      marginBottom:5,
      marginLeft:10,
      borderWidth:1,
      borderRadius:5,
      fontSize:15,
      paddingLeft:15,
    }
  });

  const toastConfig = {
    warning: ({text1,props}) => (
      <View style={{width:'100%',backgroundColor:'#ffd580',paddingLeft:10,height:30,paddingTop:5}}>
         <Text>{text1}</Text> 
         <Text>{props.uuid}</Text> 
      </View>
    ),
    done: ({text1,props}) => (
      <View style={{width:'100%',backgroundColor:'#add8e6',paddingLeft:10,height:30,paddingTop:5}}>
         <Text>{text1}</Text> 
         <Text>{props.uuid}</Text> 
      </View>
    ),
  };

  export {styles,toastConfig};