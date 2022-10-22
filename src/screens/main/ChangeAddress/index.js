import React from "react";
import { View,Text,ImageBackground,Image,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ChangeAddress=()=>{

    const navigation=useNavigation()

    return(
      <View style={{flex:1}}>
          <ImageBackground source={require('../../../assets/Icon/bg.png')}>
             <View style={{borderWidth:1,height:200}}>

             </View>
             <View style={{paddingHorizontal:8,marginTop:8}}>
             <View style={{
                            backgroundColor:'#F4F4F4',
                            marginTop:15,
                            paddingVertical:6,
                            paddingHorizontal:4,
                            elevation:3,
                            marginBottom:2,
                            borderRadius:6
                            }}>
                            <View style={{flexDirection:'row',}}>
                                       <Image source={require('../../../assets/Icon/loca.png')}/>
                                <View style={{marginLeft:8}}>
                                    <Text style={{
                                        fontSize:12,
                                        color:'#333333',
                                        fontFamily:'Montserrat-Medium',
                                        width:'96%'
                                        }}>{'1st Floor, 65, Old Oriented Bldg, M G Road, Mumbai'}</Text>
                                </View>
                            </View>
                            <View style={{marginTop:5,alignItems:'center'}}>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('ChangeAddress')}
                             style={{alignSelf:'flex-end',padding:6,borderRadius:15}}>
                                      <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,color:'#ED1B1A'}}>Change</Text>
                            </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{marginTop:15,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('AddressForm')}
                             style={{backgroundColor:'#ED1B1A',paddingHorizontal:24,paddingVertical:12,borderRadius:3}}>
                                <Text style={{color:'#ffffff',fontFamily:'Montserrat-Bold',fontSize:16}}>Enter Complete Address</Text>
                            </TouchableOpacity>
                        </View>
             </View>
          </ImageBackground>
      </View>
    )
}
export default ChangeAddress;