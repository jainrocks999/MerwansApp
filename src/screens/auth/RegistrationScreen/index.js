import { View,Text,Image, TextInput, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import styles from './style';
import { useNavigation } from "@react-navigation/native";
import CheckBox from '@react-native-community/checkbox';
const RegistrationScreen=()=>{
    const navigation=useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
        <View style={{flex:1}}>
            <View style={{padding:12}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Image source={require('../../../assets/Logo/logo.png')}/>
              <Image source={require('../../../assets/Logo/skip.png')}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:-20}}>
            <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-Bold',fontSize:22}}>Registration</Text>
            </View>
            <View style={{paddingHorizontal:20,marginTop:6,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View>
                        <Text style={{color:'#000000',fontSize:13,fontFamily:'Montserrat-Medium'}}>Already have account? Login </Text>
                    </View>
                    <View>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={{color:'#000000',fontSize:13,borderBottomWidth:1,marginTop:1,fontFamily:'Montserrat-Medium'}}>here</Text>
                    </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:45,marginTop:15}}>
                <View style={styles.inputContainer}>
                  <TextInput
                  style={{fontFamily:'Montserrat-Medium'}}
                  placeholder='Name'
                  placeholderTextColor={'#000'}
                  />
                </View>
                <View style={[styles.inputContainer,{marginTop:10}]}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput
                  style={{fontFamily:'Montserrat-Medium'}}
                  placeholder='Last Name  '
                  placeholderTextColor={'#000'}
                  />
                  
                  </View>
               </View>

               <View style={[styles.inputContainer,{marginTop:10}]}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput
                  style={{fontFamily:'Montserrat-Medium'}}
                  placeholder='Email  '
                  placeholderTextColor={'#000'}
                  />
                 
                  </View>
               </View>

               <View style={[styles.inputContainer,{marginTop:10}]}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput
                  style={{fontFamily:'Montserrat-Medium'}}
                  placeholder='Mobile Number     '
                  placeholderTextColor={'#000'}
                  />
                  
                  </View>
               </View>

               <View style={[styles.inputContainer,{marginTop:10}]}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput
                  style={{fontFamily:'Montserrat-Medium'}}
                  placeholder='Password   '
                  placeholderTextColor={'#000'}
                  />
                  <Image source={require('../../../assets/Icon/hide.png')}/>
                  </View>
               </View>

               <View style={[styles.inputContainer,{marginTop:10}]}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput
                  style={{fontFamily:'Montserrat-Medium'}}
                  placeholder='Confirm Password     '
                  placeholderTextColor={'#000'}
                  />
                  </View>
               </View>
               <View style={{marginTop:15}}>
                <Text style={{fontSize:16,color:'#000',fontFamily:'Moontserrat-Medium'}}>Subscribe Newsletter</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'40%'}}>
                    <Text style={{color:'#000',fontFamily:'Montserrat-Medium',fontSize:12}}>Yes</Text>
                    <Text style={{color:'#000',fontFamily:'Montserrat-Medium',fontSize:12}}>No</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
              <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={{
                        fontSize:12,
                        color:'#000',
                        fontFamily:'Montserrat-Medium',
                        marginTop:5
                        }}>I have read and agree to the Privacy Policy   </Text>
                   
                </View>
            </View>
           
            <View>

            </View>
           
            </View>
            <View style={{bottom:30,left:0,right:0,position:'absolute',alignItems:'center'}}>
              
            <TouchableOpacity 
                onPress={()=>navigation.navigate('MyAccountPage')}
                style={{
                    width:180,
                    height:50,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'#ED1B1A'
                    }}>
                    <Text style={{fontSize:18,color:'#FFFFFF',fontFamily:'Montserrat-bold',}}>Sign Up</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )

}
export default RegistrationScreen;