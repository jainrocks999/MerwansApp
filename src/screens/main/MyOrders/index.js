import React from "react";
import { View, Text, Image, ImageBackground, FlatList,TouchableOpacity } from 'react-native';
import styles from './style'
import { useNavigation } from '@react-navigation/native';
const MyOrders = () => {
    const navigation=useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ padding: 6,flex:1 }} source={require('../../../assets/Icon/bg.png')}>
                <View style={{ alignItems: 'center', marginTop: 5 }}>
                    <Text style={{ color: '#ED1B1A', fontFamily: 'Montserrat-Bold', fontSize: 20 }}>{'Your Orders'}</Text>
                </View>
                <View style={{}}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={{}}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginVertical: 13 }}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('OrderDetail')}>
                                      <Image source={require('../../../assets/Icon/go.png')} />
                                    </TouchableOpacity>
                                </View>
                               
                                <View style={styles.order}>

                                  <View style={styles.row}>
                                    <View>
                                        <Text style={styles.from}>Ordered From</Text>
                                        <Text style={styles.delivered}>Merwans Bakers,Andheri West</Text>
                                    </View>
                                    <View style={styles.row1}>
                                        <Text style={styles.delivered}>Delivered</Text>
                                    </View>
                                </View>
                                    <View style={[styles.cont,{marginTop:20}]}>
                                        <View style={styles.view1}>
                                            <View
                                                style={styles.view}>
                                                <View style={styles.square} />
                                            </View>
                                            <View style={{ marginLeft: 3 }}>
                                                <Image source={item.image} />
                                            </View>
                                            <View style={{ marginTop: -10, marginLeft: 5 }}>
                                                <Text style={styles.title}>{item.title}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.rView}>
                                            <Image source={require('../../../assets/Icon/rupay.png')} />
                                            <Text style={styles.rupay}>{item.price}</Text>
                                        </View>
                                    </View>

                                    <View style={[styles.cont,{marginTop:10}]}>
                                        <View style={styles.view1}>
                                            <View
                                                style={styles.view}>
                                                <View style={styles.square} />
                                            </View>
                                            <View style={{ marginLeft: 6 }}>
                                                <Image source={item.image1} />
                                            </View>
                                            <View style={{ marginTop: -10, marginLeft: 5 }}>
                                                <Text style={styles.title}>{item.title1}</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.rView,{borderBottomWidth:1,paddingVertical:3}]}>
                                            <Image source={require('../../../assets/Icon/rupay.png')} />
                                            <Text style={styles.rupay}>{item.price}</Text>
                                        </View>
                                      
                                    </View>
                                    
                                    <View style={{alignSelf:'flex-end',flexDirection:'row',alignItems:'center',marginTop:5}}>
                                    <Image source={require('../../../assets/Icon/rupay.png')} />
                                       <Text style={styles.rupay}>{`${parseFloat(item.price)+parseFloat(item.price)}`}</Text>
                                    </View>
                                   <View style={{
                                       flexDirection:'row',
                                       justifyContent:'space-between',
                                       alignItems:'center',
                                       marginTop:20
                                }}>
                                       <View>
                                           <Text style={styles.rupay}>{`23 Oct 2022`}</Text>
                                       </View>
                                       <View style={{
                                           backgroundColor:'#ED1B1A',
                                           flexDirection:'row',
                                           alignContent:'center',
                                           paddingHorizontal:5,
                                           paddingVertical:7,
                                           borderRadius:5
                                           }}>
                                           <Image source={require('../../../assets/Icon/loader.png')}/>
                                           <Text style={{color:'#ffffff',fontFamily:'Montserrat-Medium',fontSize:13,marginLeft:4}}>Reorder</Text>
                                       </View>
                                   </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
export default MyOrders;

const data = [
    { image: require('../../../assets/Logo/cake1.png'), image1: require('../../../assets/Logo/test.png'), title: 'Pineapple Cake', title1: 'Hazelnut Truffle [1 Pc]', price: 290 },
    { image: require('../../../assets/Logo/cake1.png'), image1: require('../../../assets/Logo/test.png'), title: 'Pineapple Cake', title1: 'Hazelnut Truffle [1 Pc]', price: 290 },

]