import React from 'react';
import { Text, View, Image,TouchableOpacity, TextInput } from 'react-native';
import styles, {loginScreenStyle} from './screens/styles/loginScreenStyle'

export default class App extends React.Component {
  render() {
    return (
      <>
             <View>
       <View style={styles.container}>
         <Image
           style={styles.logo}
           source={require("./assets/logo.jpeg.png")} />
       </View>
 
       <View style={styles.container_2}>
         <Image
           style={styles.img}
           source={require("./assets/Image.png")} />
       </View>
       <View style={styles.container_3}>
         <Text style={styles.details}>Login for online payment, live bus tracking monthly attendance and more</Text>
       </View>
       <View style={styles.container_3}>
         <Text style={styles.details_2}>Phone No.</Text>
         <View style={styles.container_4}>
           <TextInput style={styles.number_1} />
         </View>
       </View>
 
       <View style={styles.container_5}>
         <TouchableOpacity style={styles.btttn} >
           <Text style={styles.btn}>SEND OTP</Text>
         </TouchableOpacity>
       </View>
 
 
       <View style={styles.container_3}>
         <Text style={styles.details_3}>By continuing you agree to our <Text style={styles.details_4}>Terms of Services</Text> and <Text style={styles.details_4}>Privacy Policy</Text></Text>
       </View>
     </View>
      </>
    );
  }
}
