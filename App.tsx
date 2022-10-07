import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.iconosperfil}>
      <AntDesign style={styles.flecha} name="arrowleft" size={24} color="white" />
      <Fontisto style={styles.campanita}name="bell" size={24} color="white" />
      <Image
      style={styles.perfil}
      source={{uri: 'https://hombresconestilo.com/wp-content/uploads/2016/11/raya-en-pelo-rizado-con-cara-redonda-1.jpg'}}
      />
      <Octicons style={styles.navegation} name="three-bars" size={24} color="white" />
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.add}>
        <FontAwesome5 style={styles.user} name="user-circle" size={30} color="rgb(22, 115, 169)" />
        <TextInput
        style= {styles.input}
        placeholder='Add a Comment ...'
        />

        </View>
        <View style={styles.iconos}>
          <View style={styles.carita}>
          <AntDesign  name="smileo" size={26} color="rgb(85, 85, 173)" />
          </View>
          <View style={styles.botoncito}>
          <Entypo name="direction" size={24} color="white" />
          </View>
        </View>
        <View style={styles.comentarios}>
          <Text style={styles.cantidad}>87 comments</Text>
        </View>
        <View style={styles.primercomment}>
        <Image
         style={styles.primerperfil}
         source={{uri: 'https://moda-hombre.com/wp-content/uploads/2020/05/Degradado-alto-Peinado-atr%C3%A1s-Barba.jpg'}}
        />
        <Text style={styles.nombre}>David Green</Text>
        <Text style={styles.fecha}>. 20 Apr. 2021</Text>
        <View style={styles.contenedorparrafo}>
        <Text style={styles.fecha}>😃😇Polygon has raised $
        450 million from strategic investors acco rding to a press release sent to 
        Bitcoin.com Newa on February 7.</Text>
        </View>

        </View>
        <View style={styles.primercomment}>
        <Image
         style={styles.primerperfil}
         source={{uri: 'https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios1810/lightfieldstudios181004999/109190612-apuesto-hombre-sonriente-posando-en-blanco-con-los-brazos-cruzados-aislado-en-gris.jpg?ver=6'}}
        />
        <Text style={styles.nombre}>Michel Ganri</Text>
        <Text style={styles.fecha}>. 20 Apr. 2021</Text>
        <View style={styles.contenedorparrafo}>
        <Text style={styles.fecha}>During the weekend, when bitcoin
        rose to a two-week high, it wasz Gala that stole the show  ...</Text>
        </View>
        </View>
        <View style={styles.primercomment}>
        <Image
         style={styles.primerperfil}
         source={{uri: 'https://i.pinimg.com/236x/7d/b4/f6/7db4f6e1560ab2f885debfcd5024adfb.jpg'}}
        />
        <Text style={styles.nombre}>Kim Dranco</Text>
        <Text style={styles.fecha}>. 20 Apr. 2021</Text>
        <View style={styles.contenedorparrafo}>
        <Text style={styles.fecha}>During the weekend, when bitcoin
        rose to a two-week high, it wasz Gala that stole the show  ...</Text>
        </View>
        </View>
        <View style={styles.primercomment}>
        <Image
         style={styles.primerperfil}
         source={{uri: 'https://media.istockphoto.com/photos/portrait-of-young-man-in-yellow-tshirt-at-backyard-picture-id1180616281?k=20&m=1180616281&s=612x612&w=0&h=ZChvYgG8WCJ1M73lGE8oSyp0TMzWJxS3xRNw7uFwO6w='}}
        />
        <Text style={styles.nombre}>Scot Donavan</Text>
        <Text style={styles.fecha}>. 20 Apr. 2021</Text>
        <View style={styles.contenedorparrafo}>
        <Text style={styles.fecha}>During the weekend, when bitcoin
        rose to a two-week high, it wasz Gala that stole the show  ...</Text>
        </View>
        </View>
        <View style={styles.primercomment}>
        <Image
         style={styles.primerperfil}
         source={{uri: 'https://moda-hombre.com/wp-content/uploads/2020/05/Degradado-alto-Peinado-atr%C3%A1s-Barba.jpg'}}
        />
        <Text style={styles.nombre}>David Green</Text>
        <Text style={styles.fecha}>. 20 Apr. 2021</Text>
        <View style={styles.contenedorparrafo}>
        <Text style={styles.fecha}>😃😇Polygon has raised $
        450 million from strategic investors acco rding to a press release sent to 
        Bitcoin.com Newa on February 7.</Text>
        </View>
        </View>
        <View style={styles.footer}>
        <MaterialIcons style={styles.iconosfoot} name="house" size={37} color="rgb(140, 158, 179)" />
        <AntDesign style={styles.iconosfoot}name="minussquare" size={34} color="rgb(140, 158, 179)" />
        <FontAwesome5 style={styles.iconosfoot} name="book-open" size={34} color="rgb(140, 158, 179)" />
        <FontAwesome style={styles.iconousuario} name="users" size={34} color='rgb(95, 196, 255)'/>
        <MaterialCommunityIcons style={styles.iconosfoot} name="bookmark-minus" size={34} color="rgb(140, 158, 179)" />
        </View>
        <View style={styles.rayita}>

        </View>
        </View>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' rgb(19, 33, 50)',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
  },
  iconosperfil:{
    flexDirection:'row',
    marginTop:55,
    width:'100%',
    height:50,
  },
  flecha:{
    marginHorizontal:12,
    marginTop:10,
   
  },
  campanita:{
    padding:12,
    marginLeft: 'auto',
   
  },
  navegation:{
    padding:13,
   
  },
  perfil:{
    marginTop:10,
    width:30,
    height:32,
    borderRadius:34,
    borderColor:'white',
    borderWidth:3,
  },
  subcontainer:{
    marginTop:10,
    backgroundColor: 'rgb(65, 81, 100)',
    width:'100%',
    height:'90%',
    borderRadius:35,
  },
  add:{
    marginHorizontal:15,
    flexDirection:'row',
    marginTop:15,
    width:'90%',
    height:70,
    
  },
  input:{
    marginLeft: 'auto',
    width:'90%',
    height:60,
    backgroundColor:'rgb(99, 112, 128)',
    borderRadius:12,
    borderColor:'rgb(99, 112, 128)'
  },
  user:{
    marginTop:16,
  },
  iconos:{
    alignItems:'center',
    flexDirection:'row',
    marginTop: -74,
    marginLeft: 'auto',
    width:'32%',
    height:70,
    
  },
  carita: {
    paddingTop:12,
    alignItems:'center',
    borderRadius:15,
    width:'37%',
    height:50,
    backgroundColor:' rgb(19, 33, 50)',
  },
  botoncito:{
    marginHorizontal:5,
    paddingTop:12,
    alignItems:'center',
    borderRadius:15,
    width:'37%',
    height:50,
    backgroundColor:'rgb(95, 196, 255)',
  },
  comentarios:{
    marginHorizontal:15,
    width:'44%',
    height:34,
  },
  cantidad:{
    color:'white',
    fontSize:25,
  },
  primercomment:{
    flexDirection:'row',
    marginTop:10,
    marginHorizontal:15,
    width:'94%',
    height:110,
    borderColor:'rgb(140, 158, 179)',
    
    borderBottomWidth:1,

  },
  primerperfil:{
    marginTop:3,
    width:40,
    height:42,
    borderRadius:34,
    borderColor:'white',
    borderWidth:1,
  },
  nombre:{
    marginTop:12,
    fontSize:18,
    color:'white',
    marginHorizontal:7,
  },
  fecha:{
    marginTop:15,
    fontSize:14,
    color:'rgb(140, 158, 179)',
    marginHorizontal:5,
  },
  contenedorparrafo:{
    marginTop:35,
    marginHorizontal:-215,
    width:'89%',
    height:76,
    

  },
  footer:{
    alignItems:'flex-start',
    flexDirection:'row',
    marginTop:10,
    width:'100%',
    height:70,
    backgroundColor:'rgb(19, 33, 50)',
  },
  iconosfoot:{
    marginTop:8,
    marginHorizontal:20,
  },
  iconousuario:{
    marginTop:8,
    marginHorizontal:25,
  },
  rayita:{
    marginTop:-70,
    marginHorizontal:254,
    backgroundColor:'rgb(95, 196, 255)',
    width:'10%',
    height:2,
  }

  
});
