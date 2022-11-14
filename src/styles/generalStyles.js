import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    h1: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        marginTop: '5%',
        width: '100%'
    },
    h2: {
        fontSize: 15,
        fontFamily: 'montserrat-bold',
        marginTop: '5%',
        width: '100%'

    },

    formContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '5%'
    },
    formTextInput: {
        width: '100%',
        marginTop: '5%'
    },
    labelInput: {
        fontFamily: 'montserrat-semibold',
        paddingHorizontal: '2%',
        fontStyle: 'normal',
        fontWeight: '600',
        color: '#323643',
        fontSize: 15
    },
    inputPlaceholder: {
        marginTop: '2%',
        backgroundColor: '#FCFCFD',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 10,
        padding: '3%',
        paddingLeft: '10%',
        marginTop: '3%',
        fontSize: 13,
        fontFamily: 'montserrat-semibold',
    },
    formContainer: {
        alignItems: 'center',
        width: '100%',
    },
    standarButton: {
        marginTop: 25,
        backgroundColor: '#C96C26',
        padding:10,
        borderRadius:5
    },
    standarButtonLabel: {
        fontFamily: 'montserrat-bold',
        color: '#FFFFFF'
    },
    formCheckBox: {
        marginTop:10,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelCheck: {
        fontFamily: 'montserrat-regular',
        paddingHorizontal: '2%',
        fontStyle: 'normal',
        fontWeight: '600',
        color: '#323643',
        fontSize: 12
    },
    redirectContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:15,
    },
    redirectText:{
        fontFamily: 'montserrat-regular',
        paddingHorizontal: '4%',
        fontStyle: 'normal',
        fontWeight: '600',
        color: '#C96C26',
        fontSize: 12
    }

})