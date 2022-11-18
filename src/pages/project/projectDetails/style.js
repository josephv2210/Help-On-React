import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    bkImage: {
        position: 'relative',
        zIndex: -100
    },
    bkIcons: {
        position: 'absolute',
        zIndex: 1,
        right: 5,
        top: 120,
        
    },
    profile: {
        position: 'relative',
        zIndex: 1,
        top: -100,
        left:-100,
        borderRadius: 15,
    },
    rightInfo:{
        position:'absolute',
        top: 15,
        right: 25,
        width: '60%',


    },
    upContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingVertical: 45,
        paddingHorizontal: 45,
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadowProp: {
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#52006A'
    },
    title: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        width: '100%',
        color: '#4F4F4F'
    },
    tagsContent:{
        display:'flex',
        flexDirection: 'row',
        marginTop: 5
    },
    tagsLabel:{
        fontSize: 10,
        fontFamily: 'montserrat-regular',
        marginHorizontal: 5,
        backgroundColor: '#F6F6F6',
        padding: 3
    },
    decribeContent:{
        width: '100%',
        position: 'relative',
        top: -80,
    },
    textContent:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTitle:{
        fontFamily: 'montserrat-regular',
        fontSize: 17,
        color: '#8E8380'
    },
    textLabel:{
        fontFamily: 'montserrat-regular',
        fontSize: 10,
        color: '#152625',
        maxWidth: '50%',
        textAlign: 'right'
    },
    textLabelOR:{
        fontFamily: 'montserrat-bold',
        fontSize: 15,
        color: '#F79E38',
        maxWidth: '50%',
        textAlign: 'right'
    },
    ImgContent:{
        marginVertical:10,
    },
    imgContainer:{
        marginTop:10,
        
    },
    imgDada:{
        marginHorizontal:10,
        marginBottom:10,
        borderRadius:15
    }


})