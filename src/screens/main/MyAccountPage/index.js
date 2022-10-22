import React from 'react';
import { View,Text,Image,ImageBackground,TouchableOpacity } from "react-native";
import styles from './style';
import { useNavigation } from "@react-navigation/native";


const MyAccountPage=()=>{
    
    const navigation=useNavigation()

    return(
        <View style={{flex:1}}>
          <ImageBackground style={{padding:10}} source={require('../../../assets/Icon/bg1.png')}>
            <Image source={require('../../../assets/Icon/arrow.png')}/>
            <View>
                <View style={styles.bc}>
                   {/* <Image source={require('../../../assets/Icon/camera.png')}/>
                   <Text style={{marginLeft:7,color:'#000000',fontFamily:'Montserrat-Medium',fontSize:12}}>Edit</Text> */}
                </View>
            </View>
          </ImageBackground>
          <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:-44}}>
                    <Image source={require('../../../assets/Logo/profile.png')}/>
                    <Text style={styles.name}>XYZ</Text>
                </View>
                <View style={styles.view}>
                    <TouchableOpacity onPress={()=>navigation.navigate('MyOrders')} style={styles.button}>
                        <Image source={require('../../../assets/Icon/check-list.png')}/>
                        <Text 
                        style={styles.text}>My Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('EditProfile')}
                     style={styles.button}>
                        <Image source={require('../../../assets/Icon/edit1.png')}/>
                        <Text 
                        style={styles.text}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
          </View>
        </View>
    )
}
export default MyAccountPage;