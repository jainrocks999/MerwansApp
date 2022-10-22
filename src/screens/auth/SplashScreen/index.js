import React,{useEffect} from 'react';
import { View,Text,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash=()=>{
const navigation=useNavigation()
     useEffect(async() => {
             setTimeout(() => navigation.navigate("Login"), 2000); 
      }, []);

    return(
        <View style={{flex:1}}>
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Image source={require('../../../assets/Logo/logo.png')}/>
            </View>
        </View>
    )

}
export default Splash;