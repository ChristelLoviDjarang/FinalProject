import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import the useNavigation hook
import {StackNavigationProp} from '@react-navigation/stack';

// Import the images
import activities from '../../assets/images/yoga.jpg';
import inspirational from '../../assets/images/inspirational.jpeg';
import article from '../../assets/images/article.jpeg';
import DIARY from '../../assets/images/DIARY.jpeg';

interface HomeProps {
  navigation: StackNavigationProp<any, any>;
}

const Menu: React.FC = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to access navigation

  const handlePress = (label: string) => {
    console.log(`${label} pressed!`);
    if (label === 'Diary') {
      navigation.navigate('Diary'); // Navigate to the Diary screen
    }
    if (label === 'Yoga') {
      navigation.navigate('Yoga'); // Navigate to the Diary screen
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.innerContainer} nestedScrollEnabled={true}>
        <View style={styles.box5}>
          <ImageBackground
            source={DIARY}
            style={styles.backgroundImage}
            resizeMode="cover">
            <TouchableOpacity
              style={[styles.button, styles.button1]}
              onPress={() => handlePress('Diary')}>
              <Text style={styles.buttonText}>Diary</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.box1}>
          <ImageBackground
            source={activities}
            style={styles.backgroundImage}
            resizeMode="cover">
            <TouchableOpacity
              style={[styles.button, styles.button2]}
              onPress={() => handlePress('Yoga')}>
              <Text style={styles.buttonText}>Yoga</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.box3}>
          <ImageBackground
            source={inspirational}
            style={styles.backgroundImage}
            resizeMode="cover">
            <TouchableOpacity
              style={[styles.button, styles.button3]}
              onPress={() => handlePress('InspirationalStory')}>
              <Text style={styles.buttonText}>Inspirational Story</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.box5}>
          <ImageBackground
            source={article}
            style={styles.backgroundImage}
            resizeMode="cover">
            <TouchableOpacity
              style={[styles.button, styles.button5]}
              onPress={() => handlePress('Tips')}>
              <Text style={styles.buttonText}>Tips</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgray',
  },
  innerContainer: {
    marginBottom: 20,
  },
  box: {
    marginBottom: 20,
    marginTop: -100,
    borderRadius: 8,
    padding: -100,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden',
  },
  box1: {
    marginBottom: 20,
    borderRadius: 8,
    padding: -100,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden', // Ensure children don't overflow the box
  },
  box3: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden', // Ensure children don't overflow the box
  },
  box4: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden', // Ensure children don't overflow the box
  },
  box5: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden', // Ensure children don't overflow the box
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(255, 0, 0, 1)',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: -122,
    resizeMode: 'cover',
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    color: 'white',
    paddingLeft: 8, // Add padding left to prevent overlap with placeholder
  },
  marginBottom: {
    marginBottom: 15,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 40,
  },
  button1: {
    backgroundColor: 'transparent',
  },
  button2: {
    backgroundColor: 'transparent',
  },
  button3: {
    backgroundColor: 'transparent',
  },
  button4: {
    backgroundColor: '#007bff',
  },
  button5: {
    backgroundColor: '',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Menu;
