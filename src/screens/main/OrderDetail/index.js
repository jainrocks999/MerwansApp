import React from 'react';
import { View,Text,Image,ImageBackground,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OrderDetail=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1}}>
            <ImageBackground style={{flex:1}} source={require('../../../assets/Icon/bg.png')}>
                <View style={{padding:8}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('MyOrders')}>
                    <Image source={require('../../../assets/Icon/arrow.png')}/>
                    </TouchableOpacity>
                    <View style={{marginTop:8,alignItems:'center',justifyContent:'center',}}>
                        <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-Bold',fontSize:20}}>Order Detail</Text>
                    </View>
              </View>
              <View style={{marginTop:15,padding:8}}>
                  <Text style={{color:'#333333',fontFamily:'Montserrat-SemiBold',fontSize:16}}>#1223464</Text>
                  <Text style={{color:'#333333',fontFamily:'Montserrat-SemiBold',fontSize:13}}>23 Oct 2022</Text>
                  <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-SemiBold',fontSize:14,marginTop:8}}>Ordered From</Text>
                  <Text style={{color:'#333333',fontFamily:'Montserrat-SemiBold',fontSize:13,width:'70%'}}>Merwans Bakers,Andheri West</Text>
                  <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-SemiBold',fontSize:14,marginTop:8}}>Delivered To</Text>
                  <Text style={{color:'#333333',fontFamily:'Montserrat-SemiBold',fontSize:13,width:'70%'}}>1st Floor, 65, Old Oriented Bldg, M G Road, Mumbai</Text>
              </View>
              <View style={{marginTop:0}}>
                  <View style={{
                      width:'100%',
                      backgroundColor:'#FAFAFA',
                      elevation:3,
                      paddingVertical:5,
                      marginTop:8,                   
                      paddingRight:10,
                      }}>  
                  <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-SemiBold',fontSize:15,marginLeft:10,marginTop:10}}>Bill Summery</Text>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                            <Text style={{color:'#000000',fontFamily:'Montserrat-Bold',marginLeft:10}}>Item Total</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../../assets/Icon/rupay.png')}/>
                                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>290</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:6}}>
                            <Text style={{color:'#353535',fontFamily:'Montserrat-SemiBold',marginLeft:10}}>Delivery Charge</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../../assets/Icon/rupay.png')}/>
                                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>290</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:6}}>
                            <Text style={{color:'#353535',fontFamily:'Montserrat-SemiBold',marginLeft:10}}>Govt Taxes</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../../assets/Icon/rupay.png')}/>
                                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>290</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:6}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{color:'#353535',fontFamily:'Montserrat-SemiBold',marginLeft:10}}>Feeding India Donation  / </Text>
                            <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-SemiBold'}}>Remove</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../../assets/Icon/rupay.png')}/>
                                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>290</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:6,marginBottom:8}}>
                            <Text style={{color:'#000000',fontFamily:'Montserrat-Bold',marginLeft:10}}>Grand Total</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../../assets/Icon/rupay.png')}/>
                                <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>1160.0</Text>
                            </View>
                        </View>
                       
                     </View>
                  </View>
                  <View style={{paddingHorizontal:15,marginTop:20}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../../assets/Icon/check.png')}/>
                            <Text style={{
                                color:'#333333',
                                fontFamily:'Montserrat-SemiBold',
                                fontSize:13,
                                marginLeft:5
                                }}>Order Delivered on 23 Oct 2022 by abc.</Text>
                        </View>
                  </View>
            </ImageBackground>
        </View>
    )
}
export default OrderDetail;