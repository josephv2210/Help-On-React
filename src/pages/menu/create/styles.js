import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    display:'flex',
    alignItems:'center'
  },
  content:{
    width: '80%',
    marginBottom: 50
  },
  viewImage:{
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop:30
  },
  containerIcon:{
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: '#e3e3e3'
  },
  icon:{
    height: 30,
    width: 30,
  }
})