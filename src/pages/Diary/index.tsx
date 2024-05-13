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
import DIARY from '../../assets/images/DIARY.jpeg';
import prevImage from '../../assets/images/prev.jpeg';
import plusImage from '../../assets/images/plus.jpeg';

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
        <ImageBackground source={DIARY} style={styles.box}>
          <TouchableOpacity style={styles.touchable} onPress={navigateToMenu}>
            <Image source={prevImage} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.marginBottom]}>DIARY</Text>
          </View>
        </ImageBackground>
        <Text style={[styles.text2, styles.marginBottom]}>DIARY ENTRIES</Text>

        <View style={styles.box1}>
          <View style={styles.textContainer}>
            <Text style={[styles.text1, styles.marginBottom]}>
              Type Anything About Your Feelings
            </Text>
          </View>
        </View>
        {/* Other diary entries */}
        <TouchableOpacity
          style={styles.plusIconContainer}
          onPress={navigateToDiary2}>
          <Image source={plusImage} style={styles.plusIcon} />
        </TouchableOpacity>
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
    padding: 10,
    height: 90,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  text1: {
    fontSize: 20,
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
    marginBottom: 20,
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
