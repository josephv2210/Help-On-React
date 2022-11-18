import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native'
import gStyles from '../../../styles/generalStyles';
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
    <ScrollView>
      <Text style={styles.textTitlePrin}>¿A quien quieres ayudar hoy?</Text>

      <View style={styles.searchBarCont}>
        <TextInput style={styles.searchBarInput} placeholder='Busca y ayuda...'/>
      </View>

      <Text style={styles.nomProAct}>Proyectos Activos</Text>

      <Text style={styles.nomProCat}>Animales</Text>
      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.nomProCat}>Ambiental</Text>
      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.nomProCat}>Social</Text>
      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.conCard} onPress={() => navigation.navigate("projectDetails")}>
          <Image source={require("../../../../assets/img_proyect.png")} style={styles.imgProyect} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tTitle}>Animales De La Calle Tunal</Text>
            <Image source={require("../../../../assets/verified.png")} style={styles.imgVeri} />
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/map-pin.png")} style={styles.imgUbi} />
            <Text style={styles.tUbi}>Tunal</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require("../../../../assets/clock.png")} style={styles.imgDate} />
            <Text style={styles.tDate}>Desde el 28 de Enero 2022</Text>
          </View>

          <View style={styles.contCat}>
            <Text style={styles.tCat}>Animales</Text> 
            <Text style={styles.tCat}>Alimento</Text> 
            <Text style={styles.tCat}>Salud</Text>
          </View> 
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tRec}>Total Recaudado</Text>
            <Text style={styles.tRecPre}>$ 1'528.556</Text>
          </View>

        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
      
     {/* <View>
       <Text
             style={gStyles.redirectText}
             onPress={() => navigation.navigate("projectDetails")}
           >Lista de proyectos</Text>
       <Text
             style={gStyles.redirectText}
             onPress={() => navigation.navigate("projectList")}
           >Detalle de proyectos</Text>

     </View> */}
    </>
 
  );
}


const width = Dimensions.get('window').width -90
const styles = StyleSheet.create({
  container: {

  },
  textTitlePrin: {
    fontFamily: 'montserrat-bold',
    fontSize: 34,
    fontWeight: 'bold',
    color: '#323643',
    padding: 15,
  },
  searchBarInput: {
    fontFamily: 'montserrat-bold',
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 0.5,
    borderColor: '#ADADAD',
    height: 40,
    borderRadius: 10,
    padding: 10,


  },
  searchBarCont:{
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  nomProAct: {
    fontSize: 25,
    fontFamily: 'montserrat-bold',
    marginTop: '5%',
    width: '100%',
    fontWeight: 'bold',
    color: '#323643',
    paddingLeft: 20,
  },  
  nomProCat: {
    fontSize: 20,
    fontFamily: 'montserrat-bold',
    marginTop: '5%',
    width: '100%',
    fontWeight: 'bold',
    color: '#323643',
    paddingLeft: 20,
  }, 
  conCard: {
    marginRight: 15,
    backgroundColor: '#DDE8F8',
    width: width / 1- 40,
    padding: 0,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'espace-between',
    left: 30

  },
  imgProyect: {
    width: '100%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  tTitle: {
    fontFamily: 'montserrat-bold',
    paddingHorizontal: 13,
    paddingTop: 5,
    paddingBottom: 10,
  },
  imgVeri: {
    marginTop: 7,
  },
  tUbi: {
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 10,
    color: '#7E8392',
    fontSize: 13,
    paddingLeft: 5,

  },
  imgUbi:{
    marginLeft: 15,
  },
  tDate: {
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 10,
    color: '#7E8392',
    fontSize: 13,
    paddingLeft: 5,
  },
  imgDate: {
    marginLeft: 15,
  },
  contCat: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tCat: {
    textAlign: 'center',
    color: '#7E8392',
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    padding: 2,
    marginRight: 10,
    marginBottom: 8,
  }, 
  tRecPre: {
    fontFamily: 'montserrat-bold',
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 10,
    color: '#029094',
  },
  tRec: {
    fontFamily: 'montserrat',
    paddingHorizontal: 13,
    paddingTop: 5,
    paddingBottom: 10,
    color: '#7E8392',
  },

})


export default Home