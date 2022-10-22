import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    card:
    {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: '#F4F4F4',
        paddingVertical: 4,
        paddingHorizontal:5
   
    },
    view:{
        borderWidth:2,
        height:40,
        marginTop:3,
        paddingHorizontal:5,
        borderColor:'#FB8019',
        borderRadius:2
    },
    heading:{
        color:'#000000',
        fontFamily:'Montserrat-SemiBold',
        fontSize:15
    },
    input:{
        color:'#000000',
        fontFamily:'Montserrat-Medium',
        fontSize:12
    }
    
})



 