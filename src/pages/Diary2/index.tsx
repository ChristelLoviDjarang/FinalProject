import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import DIARY from '../../assets/images/DIARY.jpeg';
import prevImage from '../../assets/images/prev.jpeg';
import save from '../../assets/images/save.png';

interface DiaryProps {
  navigation: StackNavigationProp<any, any>;
}

const Diary2: React.FC<DiaryProps> = ({navigation}) => {
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('');

  const navigateToDiary = () => {
    navigation.navigate('Diary');
  };

  const handleSave = () => {
    setSavedNote(note);
    // Reset the input field after saving
    setNote('');
  };

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.innerContainer} nestedScrollEnabled={true}>
        <ImageBackground source={DIARY} style={styles.box}>
          <TouchableOpacity style={styles.touchable} onPress={navigateToDiary}>
            <Image source={prevImage} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.marginBottom]}>DIARY</Text>
          </View>
        </ImageBackground>
        <View style={styles.noteInput}>
          <TextInput
            placeholder="Type something...."
            value={note}
            onChangeText={setNote}
            style={styles.text3}
          />
        </View>
        <TouchableOpacity onPress={handleSave}>
          <Text style={[styles.text2]}>Save</Text>
        </TouchableOpacity>
        <View style={styles.savedNoteContainer}>
          <Text style={styles.savedNoteText}>{savedNote}</Text>
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
  noteInput: {
    marginTop: 20,
    paddingHorizontal: 20,
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
  text2: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textDecorationLine: 'underline',
  },
  text3: {
    fontSize: 20,
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
    zIndex: 1,
  },
  savedNoteContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  savedNoteText: {
    fontSize: 20,
  },
});

export default Diary2;
