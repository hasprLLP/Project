import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        alignItems: "flex-start",
        height: 100,
        paddingTop: windowHeight*0.06,
        paddingLeft: windowWidth*0.04
    
      },

      logo:{
         width: windowWidth*0.6, 
         height: windowHeight*0.06, 
      },

      img:{
         width: windowWidth*1, 
        height: windowHeight*0.27 
      },
      container_2: {
        // paddingBottom: 0
    
      },
      container_3: {
        backgroundColor: 'white',
        padding: windowWidth*0.05,
        paddingTop: windowHeight*0.05
        ,
      },
      container_4: {
        flex: 1,
        flexDirection: 'row'
        ,
      },
      container_5: {
        marginTop: windowHeight*0.1,
        width: windowWidth*0.89,
        marginLeft: windowWidth*0.06,
      },
      details: {
        fontSize: windowHeight*0.02,
        paddingLeft: windowWidth*0.03
    
      },
      details_2: {
        fontSize: windowHeight*0.02,
        fontWeight: "700",
        paddingLeft: windowWidth*0.04
    
      },
      details_3: {
        fontSize: 10,
        fontWeight: "200",
        paddingLeft: windowWidth*0.05
    
      },
      number_1: {
        height: windowHeight*0.06,
        margin: windowHeight*0.02,
        borderWidth: windowWidth*0.003,
        padding: windowHeight*0.02,
        width: windowWidth*0.8,
        borderRadius: windowHeight*0.02,
        borderColor: "grey",
        backgroundColor: "#f2f2f2"
      },
    
      btn: {
        textAlign: "center",
        marginTop: windowHeight*0.015,
        fontSize: windowHeight*0.02,
        color: "white",
        fontWeight: "800"
    },
      btttn: {
        height: windowHeight*0.06,
        width: windowWidth*0.8,
        backgroundColor: '#38b2ac',
        borderRadius: 10,
        marginLeft: windowWidth*0.04
      }
});

export default styles;