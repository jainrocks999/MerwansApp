import { View,Text,Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { useNavigation } from "@react-navigation/native";
const ForgotScreen=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1}}>
            <View style={{padding:12}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Image source={require('../../../assets/Logo/logo.png')}/>
              <Image source={require('../../../assets/Logo/skip.png')}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:200}}>
                <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-Bold',fontSize:22,}}>Forgot Password</Text>
            </View>
            <View style={{paddingHorizontal:45,marginTop:20}}>
                <View style={styles.inputContainer}>
                  <TextInput
                  placeholder='Email Address'
                  style={{fontFamily:'Montserrat-Medium'}}
                  placeholderTextColor={'#000'}
                  />
                </View>
                
               
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
            <TouchableOpacity 
                onPress={()=>navigation.navigate('MyAccountPage')}
                style={{
                    width:180,
                    height:50,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'#ED1B1A'
                    }}>
                    <Text style={{fontSize:18,color:'#FFFFFF',fontFamily:'Montserrat-bold',}}>Send</Text>
                </TouchableOpacity>
            </View>
           
            <View>

            </View>
            </View>
            
        </View>
    )

}
export default ForgotScreen;