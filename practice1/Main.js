import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('./bg.jpg')} // Replace with your image path
      resizeMode="cover" // or "contain" based on your image
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Accountant App</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

        
        {/* Additional buttons for navigating to other screens can go here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // Add an overlay to improve text visibility
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)', // Semi-transparent button background
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  // ... Add any additional styles for consistency
});

export default Main;
