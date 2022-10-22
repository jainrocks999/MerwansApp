import React from 'react';
import { View,Text,Image,ImageBackground,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const MyAddress=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1}}>
            <ImageBackground style={{flex:1}} source={require('../../../assets/Icon/bg.png')}>
                <View style={{padding:8}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('MyOrders')}>
                    <Image source={require('../../../assets/Icon/arrow.png')}/>
                    </TouchableOpacity>
                    <View style={{marginTop:8,alignItems:'center',justifyContent:'center',}}>
                        <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-Bold',fontSize:20}}>My Addresses</Text>
                    </View>
              </View>
              <View style={{paddingHorizontal:10}}>
                    <View style={{}}>
                        <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-SemiBold',fontSize:16,marginBottom:10}}>+  Add Address</Text>
                    </View>
                    <FlatList 
                    data={data}
                    renderItem={({item})=>(
                        <View style={{
                            backgroundColor:'#F4F4F4',
                            marginTop:15,
                            paddingVertical:4,
                            paddingHorizontal:4,
                            elevation:3,
                            marginBottom:2,
                            borderRadius:6
                            }}>
                            <View style={{flexDirection:'row',}}>
                                <View>
                                    <View style={{backgroundColor:"#D9D9D9",alignSelf:'flex-start',padding:4,borderRadius:15}}>
                                       <Image source={require('../../../assets/Icon/home.png')}/>
                                    </View>
                                    <Text style={{fontSize:12,color:'#333333',fontFamily:'Montserrat-Medium'}}>1km</Text>
                                </View>
                                <View style={{marginLeft:8}}>
                                    <Text style={{fontFamily:'Montserrat=SemiBold',fontSize:14,color:'#000000'}}>Home</Text>
                                    <Text style={{
                                        fontSize:12,
                                        color:'#333333',
                                        fontFamily:'Montserrat-Medium',
                                        width:'96%'
                                        }}>{item.desc}</Text>
                                </View>
                            </View>
                            <View style={{marginTop:10,alignItems:'center'}}>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('ChangeAddress')}
                             style={{backgroundColor:"#D9D9D9",alignSelf:'flex-end',padding:6,borderRadius:15}}>
                                       <Image source={require('../../../assets/Icon/editing.png')}/>
                            </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    />
              </View>
            </ImageBackground>
        </View>
    )
}
export default MyAddress;

const data=[
    {title:'Home',desc:'1st Floor, 65, Old Oriented Bldg, M G Road, Mumbai'},
    {title:'Home',desc:'1st Floor, 65, Old Oriented Bldg, M G Road, Mumbai'},
    {title:'Home',desc:'1st Floor, 65, Old Oriented Bldg, M G Road, Mumbai'}
]