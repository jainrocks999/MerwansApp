import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList,Alert,TouchableOpacity } from "react-native";
import {  } from "react-native-gesture-handler";
import Stars from "react-native-stars";
import styles from "./style";
import SwipeablePanel from 'react-native-sheets-bottom';

const CategoryList = () => {
    const [openPanel,setOpenPanel]=useState(false)

   const closePanel = () => {
        setOpenPanel(false)
      };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingLeft: 15, paddingRight: 10, paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../../assets/Icon/arrow.png')} />
                    <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: 'Montserrat-Bold', color: '#ED1B1A' }}>Cakes</Text>
                </View>
                <View style={styles.container}>
                    <Image source={require('../../../assets/Icon/search.png')} />
                    <Text style={styles.search}>Search</Text>
                </View>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Regular', color: '#000' }}>{'Cakes'}</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Bold', color: '#232323' }}>{' / Black Forest'}</Text>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                        onPress={()=>setOpenPanel(true)}
                         style={[styles.view,{borderWidth:1}]}>
                            <View style={{ width: '60%', marginTop: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <View
                                        style={styles.view1}>
                                        <View style={styles.border}/>
                                    </View>
                                    <View style={styles.tag}>
                                        <Text style={styles.best}>{'Best Seller'}</Text>
                                    </View>
                                </View>
                                <Text style={styles.title}
                                >{item.title}</Text>
                                <View
                                    style={styles.round}>
                                    <Stars
                                        default={3}
                                        spacing={3}
                                        count={5}
                                        starSize={12}
                                        fullStar={require('../../../assets/Icon/fullstar.png')}
                                        emptyStar={require('../../../assets/Icon/emptystar.png')} />
                                    <Text style={styles.review}>{item.review}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 8, }}>
                                    <Image source={require('../../../assets/Icon/rupay.png')} />
                                    <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 15, color: '#000000' }}>{item.price}</Text>
                                </View>
                                <View style={{ marginTop: 4 }}>
                                    <Text style={{ fontSize: 10, fontFamily: 'Montserrat-Regular', color: '#383737' }}>{item.desc}</Text>
                                </View>
                                <View style={styles.image}>
                                    <Image source={require('../../../assets/Icon/redHeart.png')} />
                                </View>
                                <View style={{ height: 15 }} />
                            </View>

                            <View style={{ marginTop: 20, width: '40%' }}>
                                <Image source={item.image} />
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -15 }}>
                                    <View
                                        style={styles.addCont}>
                                        <Text
                                            style={styles.add}>Add</Text>

                                        <Text style={styles.plus}>+</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Montserrat-Regular', color: '#383737', fontSize: 10, marginTop: 5 }}>Customise</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
              
                  
                 
            </View>
            <SwipeablePanel
                   style={{borderTopLeftRedius:0,}}
                   barStyle={{borderTopLeftRedius:0,}}
                   fullWidth
                   isActive={openPanel}
                   onClose={()=>closePanel()}
                   closeOnTouchOutside={()=>setOpenPanel(false)}
                   noBar={true}
                   >
                       <View style={{height:500}}>
                   <Text>narendra</Text> 
                   </View>
                 </SwipeablePanel>
        </View>
    )
}
export default CategoryList

const data = [
    { title: 'Black Forest', review: '142 Reviews', price: '70', desc: 'Evergreen  Red Velvet pastries It is a long established fact.  read more', image: require('../../../assets/Logo/pastry.png') },
    { title: 'Black Forest', review: '142 Reviews', price: '70', desc: 'Evergreen  Red Velvet pastries It is a long established fact.  read more', image: require('../../../assets/Logo/pastry.png') },
    { title: 'Black Forest', review: '142 Reviews', price: '70', desc: 'Evergreen  Red Velvet pastries It is a long established fact.  read more', image: require('../../../assets/Logo/pastry.png') },
    { title: 'Black Forest', review: '142 Reviews', price: '70', desc: 'Evergreen  Red Velvet pastries It is a long established fact.  read more', image: require('../../../assets/Logo/pastry.png') },
    { title: 'Black Forest', review: '142 Reviews', price: '70', desc: 'Evergreen  Red Velvet pastries It is a long established fact.  read more', image: require('../../../assets/Logo/pastry.png') },
    { title: 'Black Forest', review: '142 Reviews', price: '70', desc: 'Evergreen  Red Velvet pastries It is a long established fact.  read more', image: require('../../../assets/Logo/pastry.png') }
]