import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import yoga from '../../assets/images/yoga.jpg';
import prevImage from '../../assets/images/prev.jpeg';

interface DiaryProps {
  navigation: StackNavigationProp<any, any>;
}

const Diary: React.FC<DiaryProps> = ({navigation}) => {
  const navigateToMenu = () => {
    navigation.navigate('Menu');
  };

  const navigateToDiary2 = () => {
    navigation.navigate('Diary2');
  };

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.innerContainer} nestedScrollEnabled={true}>
        <ImageBackground source={yoga} style={styles.box}>
          <TouchableOpacity style={styles.touchable} onPress={navigateToMenu}>
            <Image source={prevImage} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.marginBottom]}>YOGA TIPS</Text>
          </View>
        </ImageBackground>
        <View style={styles.box1}>
          <View style={styles.textContainer}>
            <Text style={[styles.text1, styles.marginBottom]}>
              1. Start Small: If you're new to yoga, begin with a few minutes of
              practice each day. Consistency is key to forming a new habit.
            </Text>
          </View>
        </View>
        <View style={styles.box1}>
          <View style={styles.textContainer}>
            <Text style={[styles.text1, styles.marginBottom]}>
              2. Choose the Right Yoga Style: There are various styles of yoga,
              Try different styles to find the one that suits your needs and
              preferences.
            </Text>
          </View>
        </View>
        <View style={styles.box1}>
          <View style={styles.textContainer}>
            <Text style={[styles.text1, styles.marginBottom]}>
              3. Listen to Your Body: Everyone has different levels of
              flexibility and strength.
            </Text>
          </View>
        </View>
        <View style={styles.box1}>
          <View style={styles.textContainer}>
            <Text style={[styles.text1, styles.marginBottom]}>
              4. Focus on Breath: Breath is a crucial part of yoga practice.
              Deep and rhythmic breathing exercises can help calm the mind.
            </Text>
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
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    marginTop: 20,
    padding: 15,
    height: 110,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  text1: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
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
  },
  textContainer: {
    padding: 10,
    borderRadius: 5,
  },
  marginBottom: {
    marginBottom: 0,
  },
  icon: {
    width: 24,
    height: 40,
    marginRight: 370,
  },
  touchable: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 1, // Ensure the touchable is above other elements
  },
  plusIconContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 320,
  },
  plusIcon: {
    width: 40,
    height: 40,
  },
});

export default Diary;
