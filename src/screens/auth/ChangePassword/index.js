import { View,Text,Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { useNavigation } from "@react-navigation/native";
const ChangeScreen=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1}}>
            <View style={{padding:12}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Image source={require('../../../assets/Logo/logo.png')}/>
              <Image source={require('../../../assets/Logo/skip.png')}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:200}}>
                <Text style={{color:'#ED1B1A',fontWeight:'700',fontSize:24}}>Change Password</Text>
            </View>
            <View style={{paddingHorizontal:45,marginTop:20}}>
            <View style={[styles.inputContainer]}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput
                  placeholder='Old Password'
                  />
                  <Image source={require('../../../assets/Icon/hide.png')}/>
                  </View>
               </View>
                <View style={[styles.inputContainer,{marginTop:15}]}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput
                  placeholder='New Password'
                  />
                  <Image source={require('../../../assets/Icon/hide.png')}/>
                  </View>
               </View>
                <View style={[styles.inputContainer,{marginTop:15}]}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput
                  placeholder='Confirm Password'
                  />
                  <Image source={require('../../../assets/Icon/hide.png')}/>
                  </View>
               </View>
                
               
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
                <TouchableOpacity style={{width:180,height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#FDC22D'}}>
                    <Text style={{fontSize:18,color:'#000'}}>Change</Text>
                </TouchableOpacity>
            </View>
           
            <View>

            </View>
            </View>
            
        </View>
    )

}
export default ChangeScreen;