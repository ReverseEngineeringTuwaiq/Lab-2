import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { Dimensions, TouchableHighlight, Text } from 'react-native';
//import {Onboarding} from 'react-native-onboarding-swiper';

const Stack = createNativeStackNavigator();
class ProfilePage extends Component {
  render() {
    return(
      <View>
        <ScrollView>
          <View style={{ padding: 10, width: '100%', backgroundColor: '#0001', height: 150 }}></View>
          
            <View style={styles.container}>
              <View style={styles.circleProfile}>
              <Text style={{ fontSize: 50 }}>🫥</Text>
              </View>
              <Text style={styles.boldText}>User Profile</Text>
              <Text style={styles.email2}>example@example.com</Text>
            </View>
            
            <View style={[{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30 }, styles.elementsContainer]}>
            <TouchableOpacity>
              <View style={styles.square}>
                <Text style={styles.squareText}> Oily Skin</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.square}>
                <Text style={styles.squareText}>  Favorite</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.square}>
                <Text style={styles.squareText}>    Track</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.mainContainer}>
            <View style={[styles.circlesContainer]}>
              <View style={styles.circle}>
              </View>
              <TouchableOpacity>
              <View style={styles.circle}>
              </View> 
              </TouchableOpacity>
              <View style={styles.circle}>          
              </View> 
            </View>
            <View style={styles.overlay}>
            <View style={styles.overlayItem}>
    <Text style={styles.overlayText}>Username</Text>
    <Text style={styles.overlaySubText}>@Tuwaiq</Text>
    </View>
    <View style={styles.overlayItem}>
    <Text style={styles.overlayText}>       Notifications</Text>
    <Text style={styles.overlaySubText}>       Mute, Push, Email.</Text>
    </View>
    <View style={styles.overlayItem}>
    <Text style={styles.overlayText}>     Settings</Text>
    <Text style={styles.overlaySubText}>     Security, Privacy.</Text>
    </View>
  </View>
            </View>
          
        </ScrollView>
      </View>
    )
  }
}
function ScreenOne({navigation}) {
  return (
    <View style={styles.container}>
      <Text>
        Screen One
      </Text>
      <Button title="next" 
      onPress={() => navigation.navigate("Screen Two")}></Button>
    </View>
  );
}
// textinput, <View  /*image*/ > </View> 
function ScreenTwo({ navigation }) {
  return (
    <View>
      <Text>
        screen 2
        
      </Text>
    </View>
  );
}
//
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Sreen One' component={ScreenOne}></Stack.Screen>
        <Stack.Screen name='Screen Two' component={ScreenTwo}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>


  );
}
//
// const Simple = () => (
//   <Onboarding
//     onDone={() => console.log('done')}
//     pages={[
//       {
//         backgroundColor: '#fff',
//         // image: <Image source={require('./images/circle.png')} />,
//         title: 'Onboarding',
//         subtitle: 'Done with React Native Onboarding Swiper',
//       },
//       {
//         backgroundColor: '#fe6e58',
//         // image: <Image source={require('./images/square.png')} />,
//         title: 'The Title',
//         subtitle: 'This is the subtitle that sumplements the title.',
//       },
//       {
//         backgroundColor: '#999',
//         // image: <Image source={require('./images/triangle.png')} />,
//         title: 'Triangle',
//         subtitle: "Beautiful, isn't it?",
//       },
//     ]}
//   />
// );



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex:1,
    borderWidth:2,
    opacity: 0.7,
    borderColor: '#0003',
    paddingTop: 15,
    height: 300,
    marginVertical: 20,
  },
  circleText: {
    fontSize: 16,
    flexDirection: 'column',
  },
  square: {
    height:80,
    width:100,
    backgroundColor:'lightgreen',
    borderRadius:20,
    justifyContent: 'space-around',
    shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  marginBottom: 20,
  },
  circleProfile:{
    height:120,
    width:120,
    borderRadius:60,
    marginTop:-60,
    backgroundColor:'black',
    borderWidth: 4,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height:75,
    width:75,
    borderRadius:37,
    padding: 20,
    backgroundColor:'#bea',
    marginBottom: 20, 
    paddingHorizontal: 15,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 22,
    padding: 10,
  },
  email2:{
    opacity: 0.4,
    fontStyle: Blob,
    fontSize: 20,
  },
  elementsContainer: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    //padding: 'vertical',
  },
  squareText: {
    color: '#001F3F',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 15
  },
  circlesContainer: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
  overlayText: {
    color: '#000', 
    opacity: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlaySubText: {
    color: 'black', 
    fontSize: 14, 
  },
});

export default ProfilePage
//export default App;
// <Stack.Screen name='Home' component={HomeView}></Stack.Screen> 
// <Image source={require('../../Assets/proF.png')}
// style={{ width: 50, height:50}}>
// </Image>