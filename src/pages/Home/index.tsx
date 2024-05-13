import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

interface HomeProps {
  navigation: StackNavigationProp<any, any>;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  const navigateToNextPage = () => {
    navigation.navigate('Menu');
  };
  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
        <View style={styles.text}>
          <Text style={[styles.text, styles.textCenter]}>
            FIND WORDS TO IDENTIFY YOUR EMOTION
          </Text>

          <Text style={[styles.text1, styles.textCenter]}>Happy</Text>
          <Text style={[styles.text2, styles.textCenter]}>Sad</Text>
          <Text style={[styles.text3, styles.textCenter]}>Angry</Text>
          <Text style={[styles.text4, styles.textCenter]}>Fearful</Text>
          <Text style={[styles.text5, styles.textCenter]}>Suprised</Text>
          <Text style={[styles.text6, styles.textCenter]}>Disgusted</Text>
          <Text style={[styles.text7, styles.textCenter]}>Neutral</Text>
          <TouchableOpacity onPress={navigateToNextPage}>
            <Text style={[styles.text, styles.textCenter]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6FA',
  },
  text: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
    textShadowRadius: 10,
    marginTop: 20,
    fontFamily: 'Italic',
  },
  text1: {
    fontSize: 37,
    color: '#FFA500',
    marginTop: 50,
  },
  text2: {
    fontSize: 37,
    color: '#808080',
    marginTop: 30,
    marginRight: 250,
  },
  text3: {
    fontSize: 37,
    color: '#FF0000',
    marginTop: -50,
    marginLeft: 230,
  },
  text4: {
    fontSize: 37,
    color: '#8B4513',
    marginTop: 80,
    marginRight: 250,
  },
  text5: {
    fontSize: 37,
    color: '#FF1493',
    marginTop: -50,
    marginLeft: 230,
  },
  text6: {
    fontSize: 37,
    color: '#006400',
    marginTop: 90,
    marginRight: 200,
  },
  text7: {
    fontSize: 37,
    color: '#87CEEB',
    marginTop: -50,
    marginLeft: 230,
  },
  text8: {
    fontSize: 20,
    color: '#000000',
    marginTop: 150,
    marginLeft: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default Home;
