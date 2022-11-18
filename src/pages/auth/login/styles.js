import { StyleSheet, Dimensions } from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default StyleSheet.create({
    scrollViewContainer: {
        height: '100%'
    },
    bkImage: {
        position: 'relative',
        zIndex: -100
    },
    upContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingVertical: 20,
        paddingHorizontal: 45,
        width: '100%',
        height: '75%',
    },
    shadowProp: {
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#52006A'
    },
    title: {
        fontFamily: 'montserratBold',
        fontSize: 20,
        marginTop: '5%',
        width: '100%',
        color: '#4F4F4F'
    }
})