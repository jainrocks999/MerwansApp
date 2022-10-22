import React from 'react';
import { View,Text,Image,ScrollView,FlatList } from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Banner from "../../../components/Banner";

const HomeScreen=()=>{
   

   return(
       <View style={{flex:1}}>
           
           <View style={{backgroundColor:'#232323',paddingVertical:0,height:40,}}>
               <View style={{height:40,justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                   <View>
                   <View style={{marginTop:15,marginLeft:10}}>
                    <Image source={require('../../../assets/Logo/logo.png')}/>
                    </View>
                    </View>   
                   <View style={{flexDirection:'row',alignItems:'center'}}>                
                   <Image source={require('../../../assets/Icon/location.png')}/>
                   <Text style={{color:'#fff',marginLeft:10,fontSize:12}}>Thane</Text>
                   </View>

                   <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Image source={require('../../../assets/Icon/heart.png')}/>
                      <Image source={require('../../../assets/Icon/menu.png')}/>
                   </View>
             </View>
           
           </View>
           
           
        <ScrollView style={{flex:1}}>
        <View style={{width:'100%',alignItems: 'center', 
    height: 200, 
    marginTop: 0 }}>
        <FlatListSlider
            data={images}
            height={240}
            timer={5000}
            onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={{paddingHorizontal: 16}}
            indicatorContainerStyle={{position:'absolute', bottom: 20}}
            indicatorActiveColor={'#8e44ad'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
        />
        {/* <FlatListSlider
            data={images}
            height={200}
            timer={5000}
            contentContainerStyle={{paddingHorizontal:30,}}
            indicatorContainerStyle={{position:'absolute',}}
            indicatorActiveColor={'#ffffff'}
            indicatorInActiveColor={'grey'}
            indicatorActiveWidth={5}
            component={<Banner/>}
            separatorWidth={15}
            width={310}
            autoscroll={false}
            loop={false}
        /> */}
           </View>
           <View style={{backgroundColor:'#fff'}}>
                    <View style={{
                        width:'100%',
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:40
                        }}>
                        <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-Bold',fontSize:16}}>Ready To Deliver</Text>
                    </View>
                    <View style={{paddingHorizontal:6,marginTop:20}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
                            <View>
                                <Image resizeMode='contain' source={require('../../../assets/Logo/rtd1.png')}/>
                            </View>
                            <View>
                                <Image resizeMode='contain' source={require('../../../assets/Logo/rtd1.png')}/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:12}}>
                            <View>
                                <Image resizeMode='contain' source={require('../../../assets/Logo/rtd1.png')}/>
                            </View>
                            <View>
                                <Image resizeMode='contain' source={require('../../../assets/Logo/rtd1.png')}/>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#fff',marginTop:40}}>
                        <View style={{paddingHorizontal:12,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <Text style={{color:'#EB201F',fontFamily:'Montserrat-Bold',fontSize:20}}>Cakes</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                               <Text style={{color:'#EC1835',fontSize:13,marginRight:10,borderBottomWidth:1,fontFamily:'Montserrat-Medium'}}>View All</Text> 
                               <Image source={require('../../../assets/Icon/Arrow-forward.png')}/>
                            </View>
                        </View>
                        <View style={{paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{ 
                                elevation:4,
                                backgroundColor:'#fff',
                                shadowColor:'#000',
                                borderRadius:10,
                                width:'48%'
                                }}>
                                    <View>
                                        <Image style={{width:'100%'}} source={require('../../../assets/Logo/cake-box.png')}/>
                                    </View>
                                    <View style={{paddingHorizontal:10,backgroundColor:'#FAFAFA',marginTop:7}}>
                                    <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:18,color:'#383737'}}>{'Pineapple Cake'}</Text>
                                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:12,color:'#383737'}}>Lorem ipsume dolor sit amet, consectetur adipiscing elit.</Text>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:15,marginBottom:10}}>
                                        <Image source={require('../../../assets/Icon/rupay.png')}/>
                                        <Text>290</Text>
                                    </View>
                                    </View>
                                    
                            </View>
                            <View style={{ 
                                elevation:4,
                                backgroundColor:'#fff',
                                shadowColor:'#000',
                                borderRadius:10,
                                width:'48%'
                                }}>
                                    <View>
                                        <Image style={{width:'100%'}} source={require('../../../assets/Logo/cake-box.png')}/>
                                    </View>
                                    <View style={{paddingHorizontal:10,backgroundColor:'#FAFAFA',marginTop:7}}>
                                    <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:18,color:'#383737'}}>{'Pineapple Cake'}</Text>
                                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:12,color:'#383737'}}>Lorem ipsume dolor sit amet, consectetur adipiscing elit.</Text>
                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:15,marginBottom:10}}>
                                        <Image source={require('../../../assets/Icon/rupay.png')}/>
                                        <Text>290</Text>
                                    </View>
                                    </View>
                                    
                            </View>
                          
                        </View>
                        <View style={{width:'100%',backgroundColor:'#FFFBDB',marginTop:30}}>
                          <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                              <Text style={{fontFamily:'Montserrat-Bold',fontSize:20,color:'#ED1B1A'}}>Trending Now</Text>
                          </View>
                          <View style={{marginTop:20}}>
                              <FlatList
                              data={data}
                              horizontal={true}
                              renderItem={({item})=>{
                                return(
                                   <View 
                                   style={{
                                       marginHorizontal:8
                                   }}>
                                       <Image source={item.image}/>
                                       <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,color:'#000000',marginTop:10}}>{item.name
                                       }</Text>
                                   </View>
                                )
                              }
                            }
                              />
                              <View style={{
                                  flexDirection:'row',
                                  alignItems:'center',
                                  justifyContent:'center',
                                  marginTop:30
                                  }}>
                                  <Image source={require('../../../assets/Icon/arrow1.png')}/>
                                  <Image style={{marginLeft:12}} source={require('../../../assets/Icon/arrow2.png')}/>
                              </View>
                          </View>
                          <View style={{height:30}}/>
                        </View>
                       
                    </View>
           </View>
          
           </ScrollView>
       </View>
   )
}
export default HomeScreen;

const data=[
    {image:require('../../../assets/Logo/samosa.png'),name:'Cheese Puff'},
    {image:require('../../../assets/Logo/samosa.png'),name:'Cheese Puff'},
    {image:require('../../../assets/Logo/samosa.png'),name:'Cheese Puff'},
    {image:require('../../../assets/Logo/samosa.png'),name:'Cheese Puff'},
    {image:require('../../../assets/Logo/samosa.png'),name:'Cheese Puff'}
]

const images = [
    {
      image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
   {
     image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
     desc:
       'Red fort in India New Delhi is a magnificient masterpeiece of humans',
   },
   {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
   ]