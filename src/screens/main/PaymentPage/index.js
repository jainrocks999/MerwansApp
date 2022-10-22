import React from 'react';
import { View,Text,Image ,ScrollView,ImageBackground} from "react-native";
import { FlatList } from 'react-native-gesture-handler';

const Payment=()=>{
    return(
        <View style={{flex:1}}>
            <ScrollView>
            <ImageBackground  source={require('../../../assets/Icon/bg.png')}>
              <View 
              style={{
                  paddingLeft:8,
                  paddingTop:8,
                  justifyContent:'space-between',
                //   alignItems:'center',
                  flexDirection:'row'
                  }}>
                  <Image source={require('../../../assets/Logo/logo.png')}/>
                  <View 
                  style={{
                      backgroundColor:'#FDC22D',
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
                      height:30,
                      paddingHorizontal:8,
                      borderTopLeftRadius:15,
                      borderBottomLeftRadius:15
                      }}>
                       <Image source={require('../../../assets/Icon/discount.png')}/>
                       <Text style={{color:'#333333',fontFamily:'Montserrat-SemiBold',marginLeft:10}}>Coupons</Text>
                  </View>
              </View>
              <View style={{paddingHorizontal:10}}>
                  <View style={{alignItems:'center'}}>
                  <View style={{
                      width:'80%',
                      backgroundColor:'#FAFAFA',
                      flexDirection:'row',
                      alignItems:'center',
                      justifyContent:'center',
                      elevation:3,
                      paddingVertical:4,
                      marginTop:10,
                      borderRadius:5
                  }}>
                    <Image source={require('../../../assets/Icon/clock.png')}/>
                    <Text style={{color:'#333333',fontFamily:'Montserrat-Medium',fontSize:12,marginLeft:15}}>Delivery in 40 min</Text>
                  </View>
                  </View>
                  <View style={{marginTop:20}}>
                    <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-SemiBold',fontSize:15}}>Your Order</Text>
                    <View>
                        <FlatList 
                        data={data}
                        renderItem={({item})=>(
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:8,justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',alignItems:'center',}}>
                                 <View 
                             style={{
                                 borderColor:'#0FAF33',
                                 borderWidth:1,
                                 height:14,
                                 width:14,
                                 alignItems:'center',
                                 justifyContent:'center',
                                 borderRadius:1,
                                 marginTop:-10
                                 }}>
                                  <View style={{
                                      height:8,
                                      width:8,backgroundColor:'#0FAF33',
                                      borderRadius:10
                                  }}/>
                             </View>
                             <View style={{marginLeft:3}}>
                             <Image source={require('../../../assets/Logo/cake1.png')}/>
                             </View>
                             <View style={{marginTop:-10}}>
                                 <Text style={{color:'#333333',fontFamily:'Montserrat-Regular',fontSize:13}}>{item.title}</Text>
                                 <View style={{flexDirection:'row'}}>
                                     <Image source={require('../../../assets/Icon/rupay.png')}/>
                                     <Text style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:13}}>{item.price}</Text>
                                 </View>
                             </View>
                             </View>
                             <View style={{}}>
                                 <View 
                                 style={{
                                     borderWidth:1,
                                     height:22,
                                     width:60,
                                     marginTop:10,
                                     borderColor:'#ED1717',
                                     flexDirection:'row',
                                     alignItems:'center',justifyContent:'space-between',
                                     paddingHorizontal:6
                                     }}>
                                    <Image source={require('../../../assets/Icon/minus.png')}/>
                                    <Text style={{fontSize:11,color:'#ED1717'}}>1</Text>
                                    <Image source={require('../../../assets/Icon/plus.png')}/>
                                 </View>
                                 <View style={{flexDirection:'row',alignContent:'center',marginTop:1}}>
                                     <Image source={require('../../../assets/Icon/rupay.png')}/>
                                     <Text style={{color:'#000000',fontFamily:'Montserrat-Regular',fontSize:12}}>{item.price}</Text>
                                 </View>
                             </View>
                            </View>
                        )}
                        />
                    </View>
                  </View>
                   {/* You may also like */}
                  <View style={{marginTop:50}}>
                      <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-SemiBold',fontSize:15}}>You May Also Like</Text>
                  <View style={{paddingHorizontal:0,flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                            <View style={{ 
                                elevation:4,
                                backgroundColor:'#fff',
                                shadowColor:'#000',
                                borderRadius:10,
                                width:'48%'
                                }}>
                                    <View>
                                        <Image style={{width:'100%'}} source={require('../../../assets/Logo/velvet.png')}/>
                                    </View>
                                    <View style={{paddingHorizontal:10,backgroundColor:'#FAFAFA',marginTop:7}}>
                                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:10,color:'#000000'}}>{'Red Velvet [1 Pc]'}</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:15,marginBottom:10}}>
                                        <Image source={require('../../../assets/Icon/rupay.png')}/>
                                        <Text>290</Text>
                                    </View>
                                    <View 
                                 style={{
                                     borderWidth:1,
                                     height:18,
                                     width:50,
                                     marginTop:10,
                                     borderColor:'#ED1717',
                                     flexDirection:'row',
                                     alignItems:'center',justifyContent:'space-between',
                                     paddingHorizontal:6
                                     }}>
                                    <Text style={{fontSize:10,fontFamily:'Montserrat-Medium',color:'#000000'}}>Add</Text>
                                    <Image source={require('../../../assets/Icon/plus.png')}/>
                                 </View>
                                    </View>
                                    </View>
                                    <View style={{height:10}}/> 
                            </View>
                            <View style={{ 
                                elevation:4,
                                backgroundColor:'#fff',
                                shadowColor:'#000',
                                borderRadius:10,
                                width:'48%'
                                }}>
                                    <View>
                                        <Image style={{width:'100%'}} source={require('../../../assets/Logo/velvet.png')}/>
                                    </View>
                                    <View style={{paddingHorizontal:10,backgroundColor:'#FAFAFA',marginTop:7}}>
                                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:10,color:'#000000'}}>{'Red Velvet [1 Pc]'}</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:15,marginBottom:10}}>
                                        <Image source={require('../../../assets/Icon/rupay.png')}/>
                                        <Text>290</Text>
                                    </View>
                                    <View 
                                 style={{
                                     borderWidth:1,
                                     height:18,
                                     width:50,
                                     marginTop:10,
                                     borderColor:'#ED1717',
                                     flexDirection:'row',
                                     alignItems:'center',justifyContent:'space-between',
                                     paddingHorizontal:6
                                     }}>
                                    <Text style={{fontSize:10,fontFamily:'Montserrat-Medium',color:'#000000'}}>Add</Text>
                                    <Image source={require('../../../assets/Icon/plus.png')}/>
                                 </View>
                                    </View>
                                    </View>
                                   <View style={{height:10}}/> 
                            </View>
                          
                        </View>
                  </View>
                  {/*  */}

                  <View style={{alignItems:'center',marginTop:35}}>
                  <View style={{
                      width:'100%',
                      backgroundColor:'#FAFAFA',
                      flexDirection:'row',
                      alignItems:'center',
                      elevation:3,
                      paddingVertical:5,
                      marginTop:10,
                      borderRadius:5,
                      paddingHorizontal:10,
                      
                  }}>
                    
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',}}>Add More Items</Text>
                  </View>
                  <View style={{
                      width:'100%',
                      backgroundColor:'#FAFAFA',
                      flexDirection:'row',
                      alignItems:'center',
                      elevation:3,
                      paddingVertical:5,
                      marginTop:20,
                      borderRadius:5,
                      paddingHorizontal:10,
                      
                  }}>
                    
                    <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',}}>Add Instructions</Text>
                  </View>
                 
                  </View>

                 {/* Use Coupons */}
                  
                 <View style={{alignItems:'center',marginTop:35}}>
                  <View style={{
                      width:'80%',
                      backgroundColor:'#FAFAFA',
                      flexDirection:'row',
                      alignItems:'center',
                      elevation:3,
                      paddingVertical:5,
                      marginTop:10,
                      borderRadius:5,
                      paddingHorizontal:10,
                      justifyContent:'space-between',
                      borderWidth:1,
                      borderColor:'#FB8019'
                      
                      }}>  
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../../assets/Icon/discount.png')}/>
                            <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',marginLeft:10}}>Use Coupons</Text>
                        </View>
                        <Image source={require('../../../assets/Icon/go.png')}/>
                     </View>
                  </View>


                  {/*  */}

             
              </View>
              <View style={{marginTop:30}}>
                  <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-SemiBold',fontSize:15,marginLeft:10}}>Bill Summery</Text>
                  <View style={{
                      width:'100%',
                      backgroundColor:'#FAFAFA',
                      elevation:3,
                      paddingVertical:5,
                      marginTop:10,                   
                      paddingRight:10,
                      }}>  

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
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
                  {/*  */}
                  <View style={{paddingHorizontal:10}}>
                        <View style={{
                            width:'100%',
                            backgroundColor:'#FAFAFA',
                            flexDirection:'row',
                            alignItems:'center',
                            elevation:3,
                            paddingVertical:5,
                            marginTop:25,
                            borderRadius:5,
                            paddingHorizontal:10,
                            justifyContent:'space-between'
                        }}>
                            <Text 
                            style={{
                                color:'#000000',
                                fontFamily:'Montserrat-Medium',
                                }}>Your Total Saving</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../../assets/Icon/rupay.png')}/>
                            <Text style={{color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>290</Text>
                            </View>
                        </View>

                        <View style={{
                            width:'100%',
                            backgroundColor:'#FAFAFA',
                            flexDirection:'row',
                            alignItems:'center',
                            elevation:3,
                            paddingVertical:5,
                            marginTop:25,
                            borderRadius:5,
                            paddingHorizontal:10,
                            justifyContent:'space-between'
                        }}>
                            <Text 
                            style={{
                                color:'#000000',
                                fontFamily:'Montserrat-Medium',
                                }}>Save for all orders at this address</Text>
                            <View style={{width:12,height:12,borderWidth:1,borderColor:'grey'}}>
                                
                            </View>
                        </View>

                        <View style={{
                            width:'100%',
                            backgroundColor:'#FAFAFA',
                            elevation:3,
                            paddingVertical:8,
                            marginTop:25,
                            borderRadius:5,
                            paddingHorizontal:10,
                            
                        }}>
                            <Text 
                            style={{
                                color:'#000000',
                                fontFamily:'Montserrat-Medium',
                                }}>Your Details</Text>
                            <Text style={{
                                color:'#000000',
                                fontFamily:'Montserrat-Medium',
                                marginTop:5
                                }}>123456789</Text>
                        </View>

                        <View style={{
                            width:'100%',
                            backgroundColor:'#FAFAFA',
                            paddingVertical:8,
                            marginTop:25,
                            borderRadius:5,
                            paddingHorizontal:10,
                            
                        }}>
                            <Text 
                            style={{
                                color:'#000000',
                                fontFamily:'Montserrat-Medium',
                                marginTop:6
                                }}>Your Details</Text>
                            <Text style={{
                                color:'#000000',
                                fontFamily:'Montserrat-Regular',
                                marginTop:5,
                                fontSize:10
                                }}>100% cancellation fee will be applicable if you decide to cancel the order anytime after ordre placement.Avoid cancellation as it leads to food wastage.</Text>
                        </View>
                  </View>
                  <View style={{
                      backgroundColor:'#F4F4F4',
                      paddingHorizontal:10,
                      paddingVertical:20,
                      marginTop:20,
                    //   borderWidth:1,
                      elevation:3
                      }}>
                  <View style={{
                            width:'100%',
                            backgroundColor:'#FFFFFF',
                            paddingVertical:8,
                            borderRadius:5,
                            paddingHorizontal:10,
                            flexDirection:'row',
                            alignItems:'center',
                            elevation:3
                        }}>
                            <Image source={require('../../../assets/Icon/loca.png')}/>
                            <View style={{marginLeft:15,width:'80%'}}>
                            <Text 
                            style={{
                                color:'#000000',
                                fontFamily:'Montserrat-Medium',
                                marginTop:6
                                }}>Delivery at Home</Text>
                            <Text style={{
                                color:'#000000',
                                fontFamily:'Montserrat-Regular',
                                marginTop:2,
                                fontSize:12
                                }}>1st Floor, 65, Old Oriented Bldg, M G Road, Mumbai</Text>
                             </View>
                        </View>

                        <View style={{
                            width:'100%',
                            backgroundColor:'#FFFFFF',
                            paddingVertical:8,
                            borderRadius:5,
                            paddingHorizontal:10,
                            flexDirection:'row',
                            alignItems:'center',
                            elevation:3,
                            marginTop:20,
                            justifyContent:'space-between'
                        }}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../../assets/Icon/cutlery.png')}/>
                                <Text 
                                    style={{
                                        color:'#000000',
                                        fontFamily:'Montserrat-Medium',
                                        marginLeft:20
                                        }}>Always Send Cutlery</Text>
                            </View>
                            <View style={{width:12,height:12,borderWidth:1,borderColor:'grey'}}>
                                
                            </View>
                        </View>

                        <View style={{
                            width:'100%',
                            backgroundColor:'#ED1B1A',
                            paddingVertical:8,
                            borderRadius:5,
                            paddingHorizontal:10,
                            alignItems:'center',
                            elevation:3,
                            marginTop:20,
                            height:50,
                            justifyContent:'center',
                            flexDirection:'row',
                            marginBottom:10
                        }}>
                            
                           <Text style={{color:"#fff",fontFamily:'Montserrat-Bold'}}>{`Choose Payment Method`}</Text>
                           <Image style={{tintColor:'#fff',marginLeft:20}} source={require('../../../assets/Icon/go.png')}/>
                        </View>
                  </View>
             <View style={{height:40}}/>
            </ImageBackground>
            
            </ScrollView>

        </View>
    )
}
export default Payment;

const data=[
    {image:require('../../../assets/Logo/cake1.png'),title:'Pineapple Cake',price:'290'},
    {image:require('../../../assets/Logo/cake1.png'),title:'Pineapple Cake',price:'290'},
    {image:require('../../../assets/Logo/cake1.png'),title:'Pineapple Cake',price:'290'},
    {image:require('../../../assets/Logo/cake1.png'),title:'Pineapple Cake',price:'290'}
]