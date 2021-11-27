import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    container_1: {
        paddingTop: windowHeight * 0.08,
        paddingLeft: windowWidth * 0.06
    },

    logo: {
        width: windowWidth * 0.5,
        height: windowHeight * 0.06,
        backgroundColor: "red"
    },

    container_3: {
        backgroundColor: 'white',
        padding: windowHeight * 0.01,
        paddingTop: windowHeight * 0.03,
    },

    details: {
        fontSize: 20,
        paddingLeft: windowWidth * 0.04,
        fontWeight: "700"

    },

    details_1: {
        fontSize: windowHeight * 0.02,
        paddingLeft: windowWidth * 0.04,
        // fontWeight: "700"
        paddingTop: windowHeight * 0.02
    },

    image: {
        width: windowWidth * 1,
        height: windowHeight * 0.3
    },

    container_5: {
        marginTop: windowHeight * 0.05,
        width: windowWidth * 0.9,
        marginLeft: windowWidth * 0.06,
    },

    btn: {
        textAlign: "center",
        marginTop: windowHeight*0.015,
        fontSize: windowHeight*0.02,
        color: "white",
        fontWeight: "800"
    },

    bttn: {
        height: windowHeight * 0.06,
        width: windowWidth * 0.8,
        backgroundColor: '#38b2ac',
        borderRadius: 10,
        marginLeft: windowWidth * 0.03
    },

    details_3: {
        fontSize: windowHeight * 0.014,
        fontWeight: "200",
        paddingLeft: windowWidth * 0.05

    },

    detail_4:
    {
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        fontWeight: "200"
    }

});

export default styles;