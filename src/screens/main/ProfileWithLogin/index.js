import React,{useEffect,useState} from "react";
import { View,Text,Image,ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const ExpandableComponent = ({item, onClickFunction}) => {
    const [layoutHeight, setLayoutHeight] = useState(0);
    const navigation=useNavigation()
  
    useEffect(() => {
      if (item.isExpanded) {
        setLayoutHeight(null);
      } else {
        setLayoutHeight(0);
      }
    }, [item.isExpanded]);
  
    return (
      <View style={{paddingHorizontal:1}}>
        {/*Header of the Expandable List Item*/}
        <View
          activeOpacity={0.8}
        //   onPress={onClickFunction}
          style={{}}>
          <View style={[styles.card1,{
              marginTop:18,
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              paddingHorizontal:10,
              paddingVertical:7,
        }]}>
             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                 <View style={{backgroundColor:'#D9D9D9',borderRadius:15,padding:6}}>
                    <Image source={item.image}/>
                </View>
              <Text style={{fontFamily:'Montserrat-SemiBold',color:'#333333',fontSize:16,marginLeft:12}}>{item.name}</Text>
             </View>
             <View style={{marginRight:8}}>
                 <Image source={require('../../../assets/Icon/down.png')}/>
             </View>
         </View>    
        </View>
       
      </View>
    );
  };


const Profile=()=>{
    const [pending,setPending]=useState(true)
    const [listDataSource, setListDataSource] = useState(CONTENT);
    const [multiSelect, setMultiSelect] = useState(false);
    
    return(
        <View style={{flex:1}}>
            
            <ImageBackground source={require('../../../assets/Icon/bg.png')}>
                <View style={styles.header}>
                      <Image style={{marginTop:15}} source={require('../../../assets/Logo/logo.png')}/>
                     <View 
                     style={styles.location}>
                         <Image source={require('../../../assets/Icon/location.png')}/>
                         <Text style={{color:'#fff',marginLeft:10,fontFamily:'Montserrat-Regular'}}>Thane</Text>
                     </View>
                </View>
                <ScrollView>
                <View style={{paddingHorizontal:10,marginTop:10}}>
                    <View style={styles.view}>
                      <View>
                          <Text style={styles.name}>{'XYZ'}</Text>
                          <Text style={[styles.name,{marginTop:8}]}>{'xyz@gmail.com'}</Text>
                          {/* <Text style={styles.acti}>View Activity<Image source={require('../../../assets/Icon/right-arrow.png')}/></Text> */}
                      </View>
                      <View style={{}}>
                          <Image source={require('../../../assets/Logo/profile.png')}/>
                      </View>
                    </View>
                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                       <View style={styles.card}>
                           <Image style={{marginTop:10}} source={require('../../../assets/Icon/love.png')}/>
                           <Text style={styles.text}>Likes</Text>
                       </View>
                       <View style={styles.card}>
                           <Image style={{marginTop:10}} source={require('../../../assets/Icon/payments.png')}/>
                           <Text style={styles.text}>Payments</Text>
                       </View>
                       <View style={styles.card}>
                           <Image style={{marginTop:10}} source={require('../../../assets/Icon/setting.png')}/>
                           <Text style={styles.text}>Settings</Text>
                       </View>
                   </View>
                   {/* <View style={[styles.view1]}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          <View style={{backgroundColor:'#d2cfd4',borderRadius:15,padding:4}}>
                              <Image source={require('../../../assets/Icon/star.png')}/>
                          </View>
                          <Text style={styles.rating}>Your Rating</Text>
                      </View>
                      <View></View>
                   </View> */}
                   {/* Food Orders */}
                   <View style={styles.cont}>
                    <Text 
                    style={{
                        fontFamily:'Montserrat-SemiBold',
                        fontSize:20,
                        color:'#ED1717'
                        }}>Food Orders</Text>
                        <View style={{marginTop:0}}>
                        {pending==true? <View>
                            {CONTENT.map((item, key) => (
                                <ExpandableComponent
                                key={item.CustomerSrNo}
                                onClickFunction={() => {
                                    updateLayout(key);
                                }}
                                item={item}
                                />
                            ))}
                            </View>:null}
                            </View>
                   </View>
                   <View style={{
                        backgroundColor:'#FFFFFF',
                        marginTop:30,
                        paddingHorizontal:5,
                        paddingVertical:15,
                     
                        }}>
                   <Text 
                    style={{
                        fontFamily:'Montserrat-SemiBold',
                        fontSize:20,
                        color:'#ED1717',
                        }}>More</Text>
                     <View style={{marginTop:0}}>
                        {pending==true? <View>
                            {CONTENT1.map((item, key) => (
                                <ExpandableComponent
                                key={item.CustomerSrNo}
                                onClickFunction={() => {
                                    updateLayout(key);
                                }}
                                item={item}
                                />
                            ))}
                            </View>:null}
                            </View>
                   </View>
                   <View style={{height:100}}/>
                </View>
                </ScrollView>
                
            </ImageBackground>
            
        </View>
    )

}
export default Profile;

const CONTENT = [
    
    {
      isExpanded: false,
      image: require('../../../assets/Icon/shopping-bag.png'),
      name:'Your Order',
      date:'23 Sep 2021',
      subcategory: [
        {id: 7, val: 'Sub Cat 7'},
      ],
    },
    {
      isExpanded: false,
      image: require('../../../assets/Icon/like.png'),
      name:'Favorite Orders',
      date:'23 Sep 2021',
      subcategory: [
        {id: 7, val: 'Sub Cat 7'},
      ],
    },
    {
      isExpanded: false,
      image: require('../../../assets/Icon/person.png'),
      name:'Address Book',
      date:'23 Sep 2021',
      subcategory: [
        {id: 7, val: 'Sub Cat 7'},
      ],
    },
    {
      isExpanded: false,
      image: require('../../../assets/Icon/msg.png'),
      name:'Online Odering help',
      date:'23 Sep 2021',
      subcategory: [
        {id: 7, val: 'Sub Cat 7'},
      ],
    },

    
  ];
  const CONTENT1 = [

    {
      isExpanded: false,
      image: require('../../../assets/Icon/info.png'),
      name:'About',
      date:'23 Sep 2021',
      subcategory: [
        {id: 7, val: 'Sub Cat 7'},
      ],
    },
    
    
    
      {
        isExpanded: false,
        image: require('../../../assets/Icon/rating1.png'),
        name:'Rate Us on Play store',
        date:'23 Sep 2021',
        subcategory: [
          {id: 7, val: 'Sub Cat 7'},
        ],
      },
      {
        isExpanded: false,
        image: require('../../../assets/Icon/log-out.png'),
        name:'Logout',
        date:'23 Sep 2021',
        subcategory: [
          {id: 7, val: 'Sub Cat 7'},
        ],
      },
     

    
  ];