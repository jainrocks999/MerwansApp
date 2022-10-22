import React from "react";
import { View,Text,Image,ImageBackground ,TouchableOpacity,TextInput} from "react-native";
import styles from './style';

const AddressForm=()=>{
    return(
        <View style={{flex:1}}>
            <ImageBackground style={{paddingHorizontal:6}} source={require('../../../assets/Icon/bg.png')}>
                <View>
                  
                </View>
                <View style={{marginTop:6,alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Text 
                    style={{
                        color:'#ED1B1A',
                        fontFamily:'Montserrat-Bold',
                        fontSize:20,
                        marginTop:10
                        }}>Enter Address Details</Text>
                    <Image style={{marginTop:-10,marginRight:6}} source={require('../../../assets/Icon/multiply.png')}/>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:16,color:'#333333',fontFamily:'Montserrat-SemiBold'}}>Save Address As</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:16}}>
                    <TouchableOpacity 
                    style={[styles.button,{borderWidth:1,borderColor:'#ED1B1A'}]}>
                        <Text style={styles.text}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.button}>
                        <Text style={styles.text}>Work</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.button}>
                        <Text style={styles.text}>Hotel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.button}>
                        <Text style={styles.text}>Other</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding:20}}>
                <View>
                    <Text style={styles.heading}>Complete Address</Text>
                    <View style={styles.view}>
                        <TextInput
                        style={styles.input}
                        placeholder="XYZ"
                        placeholderTextColor={'#000000'}
                        />
                    </View>
                </View>

                <View style={{marginTop:17}}>
                    <Text style={styles.heading}>Floor (Optional)</Text>
                    <View style={styles.view}>
                        <TextInput
                        style={styles.input}
                        placeholder="XYZ"
                        placeholderTextColor={'#000000'}
                        />
                    </View>
                </View>
                <View style={{marginTop:17}}>
                    <Text style={styles.heading}>Nearby Landmark(Optional)</Text>
                    <View style={styles.view}>
                        <TextInput
                        style={styles.input}
                        placeholder="XYZ"
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
export default AddressForm;