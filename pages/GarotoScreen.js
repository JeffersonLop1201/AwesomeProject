import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function GarotoScreen() {
  const brandName = "Garoto";
  const brandImage = "URL da imagem da Garoto";
  const brandDescription = "Descrição da Garoto";

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{brandName}</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: brandImage }} style={styles.image} />
      </View>
      <View style={styles.card}>
        <Text style={styles.description}>{brandDescription}</Text>
      </View>
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
  top: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 3,
    height: 85,
    textAlign: 'center',
    marginTop: 5,
    color: '#50301E',
  },
  line: {
    width: '90%',
    borderBottomColor: '#50301E',
    borderBottomWidth: 5, 
    position: 'absolute',
    top: 105, 
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  card: {
    backgroundColor: '#50301E',
    borderRadius: 15,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
