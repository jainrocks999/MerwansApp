import { View,Text,Image, TextInput, TouchableOpacity,ImageBackground } from 'react-native';
import React from 'react';
import styles from './style';
import { useNavigation } from "@react-navigation/native";
const LoginScreen=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1}}>
            <ImageBackground style={{flex:1}} source={require('../../../assets/Icon/bg.png')}>
            <View style={{padding:12}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Image source={require('../../../assets/Logo/logo.png')}/>
              <Image source={require('../../../assets/Logo/skip.png')}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:200}}>
            <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-Bold',fontSize:22}}>Login</Text>
            </View>
            <View style={{paddingHorizontal:45,marginTop:20}}>
                <View style={styles.inputContainer}>
                  <TextInput
                  style={{fontFamily:'Montserrat-Medium'}}
                  placeholder='Email Address'
                  placeholderTextColor={'#000000'}
                  />
                </View>
                <View style={[styles.inputContainer,{marginTop:15}]}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput
                  style={{fontFamily:'Montserrat-Medium'}}
                  placeholder='Password  '
                  placeholderTextColor={'#000000'}
                  />
                  <Image source={require('../../../assets/Icon/hide.png')}/>
                  </View>
               </View>
               <View style={{marginTop:6,width:'59%'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Forgot')}>
                        <Text style={{
                            color:'#146678',
                            fontSize:14,
                            borderBottomWidth:1,
                            borderColor:'#146678',
                            fontFamily:'Montserrat-Medium'
                            }}>Forgotten Password</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('CategoryList')}
                style={{
                    width:180,
                    height:50,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'#ED1B1A'
                    }}>
                    <Text style={{fontSize:18,color:'#FFFFFF',fontFamily:'Montserrat-bold',}}>Log In</Text>
                </TouchableOpacity>
            </View>
           
            <View>

            </View>
            </View>
            <View style={{bottom:30,position:'absolute',left:0,right:0}}>
            <View style={{paddingHorizontal:20,marginTop:6,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View>
                        <Text style={{color:'#000000',fontSize:13,fontFamily:'Montserrat-Medium'}}>Don't have an Account? </Text>
                    </View>
                    <View>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                        <Text style={{color:'#000000',fontSize:13,borderBottomWidth:1,marginTop:1,fontFamily:'Montserrat-Medium'}}>Click here</Text>
                    </TouchableOpacity>
            </View>
            </View>
            </ImageBackground>
        </View>
    )

}
export default LoginScreen;

