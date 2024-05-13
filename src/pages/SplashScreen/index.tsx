import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Dua from '../../assets/images/2.jpg';

interface SplashScreenProps {
  navigation: StackNavigationProp<any, any>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const navigateToNextPage = () => {
    navigation.replace('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={navigateToNextPage}>
          <View style={styles.box}>
            <View style={styles.imageContainer}>
              <Image source={Dua} style={styles.image} />
            </View>
            <Text style={[styles.text, styles.textCenter]}>
              Your personal mood tracker
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  box: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#E6E6FA',
  },
  text: {
    fontSize: 13,
    color: 'black',
    textShadowRadius: 10,
    marginTop: -30,
  },
  textCenter: {
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: 'cover',
    marginTop: 160,
  },
});

export default SplashScreen;
