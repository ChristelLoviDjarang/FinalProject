import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

const splash: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.innerContainer} nestedScrollEnabled={true}>
        <ImageBackground
          source={require('./src/image/activities.jpg')}
          style={styles.box}>
          <Image source={require('./src/image/prev.png')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.marginBottom]}>ACTIVITIES</Text>
          </View>
        </ImageBackground>
        <Text style={[styles.text2, styles.marginBottom]}>MEDITATION</Text>
        <View style={styles.box1}>
          <View style={styles.textContainer}>
            <Text style={[styles.text1, styles.marginBottom]}>Music</Text>
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={[styles.text4, styles.marginBottom]}>WORKOUT</Text>

          <View style={styles.textContainer}>
            <Text style={[styles.text3, styles.marginBottom]}>Yoga</Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6FA',
  },
  innerContainer: {
    marginBottom: 20,
  },
  box: {
    padding: 0,
    marginBottom: 20,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    marginTop: -20,
    marginBottom: 70,
    padding: 10,
    height: 90,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    marginTop: -10,
    marginBottom: 85,
    padding: 10,
    height: 90,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  text1: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    marginRight: 300,
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  text2: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  text3: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    marginRight: 300,
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  text4: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 20,
    marginTop: -50,
  },
  // Atur margin atas untuk menggeser teks ke bawah
  // marginBottom: 20, // Jika ingin menggunakan marginBottom untuk menggeser teks ke atas

  textContainer: {
    padding: 10,
    borderRadius: 5,
  },
  marginBottom: {
    marginBottom: 20, // Adjust as needed
  },
  icon: {
    width: 24,
    height: 40,
    marginRight: 370,
  },
});

export default splash;
