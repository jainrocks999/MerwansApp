import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view:{
        borderColor:'#0FAF33',
        borderWidth:1,
        height:14,
        width:14,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:1,
        marginTop:-10
    },
    cont:{ 
       flexDirection: 'row', 
       alignItems: 'center', 
       marginTop: 8, 
       justifyContent: 'space-between' 
    },
    view1:{
       flexDirection: 'row', 
       alignItems: 'center', 
    },
    square:{
        height: 8,
        width: 8, backgroundColor: '#0FAF33',
        borderRadius: 10
    },
    title:{
        color: '#333333', 
        fontFamily: 'Montserrat-Regular', 
        fontSize: 15
    },
    rView:{
        flexDirection: 'row', 
        alignContent: 'center', 
        marginTop: 1 
    },
    rupay:{
        color: '#000000', 
        fontFamily: 'Montserrat-Medium', 
        fontSize: 12 
    },
    order:{ 
        paddingHorizontal: 4, 
        paddingVertical: 10, 
        backgroundColor: '#FFFFFF',
        elevation:3,
        marginBottom:3
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    row1:{
        backgroundColor:'#F4F4F4',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:4,
        elevation:3
    },
    delivered:{
        fontFamily:'Montserrat-Medium',
        fontSize:13,
        color:'#000000'
    },
    from:{
        color:'#ED1B1A',
        fontFamily:'Montserrat-SemiBold',
        fontSize:15
    }

})