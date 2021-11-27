import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles/homeScreenStyle";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_1}>
        <Image
          style={styles.logo}
          source={require("./assets/logo.jpeg.png")} />
      </View>

      <View style={styles.container_3}>
        <Text style={styles.details}>Safe and Secure{"\n"}with Live Tracking</Text>
        <Text style={styles.details_1}>Your chlidren's safety is our topmost priority.</Text>
      </View>

      <View style={styles.container_2}>
        <Image
          style={styles.image}
          source={require("./assets/Image.png")} />
      </View>

      <View style={styles.container_5}>
        <TouchableOpacity style={styles.bttn} >
          <Text style={styles.btn}>SEND OTP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container_3}>
        <Text style={styles.details_3}>By continuing you agree to our <Text style={styles.detail_4}>Terms of Services</Text> and <Text style={styles.detail_4}>Privacy Policy</Text></Text>
      </View>
    </View>
  );
};

export default HomeScreen;