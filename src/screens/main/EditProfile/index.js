import React from "react";
import { View,Text,ImageBackground,Image,TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const EditProfile=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1}}>
          <ImageBackground style={{padding:6}} source={require('../../../assets/Icon/bg.png')}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={require('../../../assets/Icon/arrow.png')}/>
            </TouchableOpacity>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#ED1B1A',fontFamily:'Montserrat-Bold',fontSize:20,marginTop:5}}>Edit Profile</Text>
            </View>

            {/* <View style={{
                elevation:3,
                backgroundColor:'#fff',
                borderRadius:6,
                marginTop:20,
                paddingVertical:5,
                paddingHorizontal:10
                }}>
             <Image source={require('../../../assets/Logo/profile.png')}/>
            </View> */}
            <View style={{padding:20}}>
                <View>
                    <Text style={styles.heading}>Name</Text>
                    <View style={styles.view}>
                        <TextInput
                        style={styles.input}
                        placeholder="XYZ"
                        placeholderTextColor={'#000000'}
                        />
                    </View>
                </View>

                <View style={{marginTop:17}}>
                    <Text style={styles.heading}>Phone Number</Text>
                    <View style={styles.view}>
                        <TextInput
                        style={styles.input}
                        placeholder="123456789"
                        placeholderTextColor={'#000000'}
                        />
                    </View>
                </View>
                <View style={{marginTop:17}}>
                    <Text style={styles.heading}>Email</Text>
                    <View style={styles.view}>
                        <TextInput
                        style={styles.input}
                        placeholder="abc@gmail.com"
                        placeholderTextColor={'#000000'}
                        />
                    </View>
                </View>
                
                <View style={{marginTop:25,alignItems:'center'}}>
                    <TouchableOpacity style={{
                        paddingHorizontal:24,
                        alignItems:'center',
                        backgroundColor:'#ED1B1A',
                        height:50,
                        justifyContent:'center',
                        borderRadius:4
                        }}>
                        <Text style={{fontFamily:'Montserrat-Bold',color:'#fff',fontSize:17}}>Save Changes</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </ImageBackground>
        </View>
    )
}
export default EditProfile;