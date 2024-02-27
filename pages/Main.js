import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Main() {
  const navigation = useNavigation();
  const [pressedButton, setPressedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setPressedButton(buttonName);
    navigation.navigate(buttonName);
  };

  const handleButtonPressIn = (buttonName) => {
    setPressedButton(buttonName);
  };

  const handleButtonPressOut = () => {
    setPressedButton(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.titulo}>Marcas de Chocolate</Text>
        <View style={styles.line}></View>
      </View>
      
      <ScrollView style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBackground}></View>
          <TouchableWithoutFeedback
            onPressIn={() => handleButtonPressIn('Garoto')}
            onPressOut={handleButtonPressOut}
            onPress={() => handleButtonPress('Garoto')}
          >
            <View style={[styles.button, pressedButton === 'Garoto' && styles.buttonPressed]}>
              <Text style={styles.buttonText}>GAROTO</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBackground}></View>
          <TouchableWithoutFeedback
            onPressIn={() => handleButtonPressIn('Milka')}
            onPressOut={handleButtonPressOut}
            onPress={() => handleButtonPress('Milka')}
          >
            <View style={[styles.button, pressedButton === 'Milka' && styles.buttonPressed]}>
              <Text style={styles.buttonText}>MILKA</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBackground}></View>
          <TouchableWithoutFeedback
            onPressIn={() => handleButtonPressIn('Hersheys')}
            onPressOut={handleButtonPressOut}
            onPress={() => handleButtonPress('Hersheys')}
          >
            <View style={[styles.button, pressedButton === 'Hersheys' && styles.buttonPressed]}>
              <Text style={styles.buttonText}>HERSHEY'S</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBackground}></View>
          <TouchableWithoutFeedback
            onPressIn={() => handleButtonPressIn('Nestle')}
            onPressOut={handleButtonPressOut}
            onPress={() => handleButtonPress('Nestle')}
          >
            <View style={[styles.button, pressedButton === 'Nestle' && styles.buttonPressed]}>
              <Text style={styles.buttonText}>NESTLÉ</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBackground}></View>
          <TouchableWithoutFeedback
            onPressIn={() => handleButtonPressIn('FerreroRocher')}
            onPressOut={handleButtonPressOut}
            onPress={() => handleButtonPress('FerreroRocher')}
          >
            <View style={[styles.button, pressedButton === 'FerreroRocher' && styles.buttonPressed]}>
              <Text style={styles.buttonText}>FERRERO ROCHER</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8F634A',
    alignItems: 'center',
    paddingTop: 45,
  },
  titulo: {
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 3,
    height: 85,
    textAlign: 'center',
    marginTop: 5,
    color: '#50301E',
  },
  top: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: '90%',
    borderBottomColor: '#50301E',
    borderBottomWidth: 5, 
    position: 'absolute',
    top: 105, 
  },
  bottom: {
    flex: 1,
    width: '100%',
    marginTop:45,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonBackground: {
    position: 'absolute',
    top: 25,
    backgroundColor: '#50301E',
    borderRadius: 15,
    width: '80%',
    height: 50,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#8f634a',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#50301E',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 30
  },
  buttonPressed: {
    borderBottomWidth: 5,
    transform: [{ translateY: 5 }],
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
