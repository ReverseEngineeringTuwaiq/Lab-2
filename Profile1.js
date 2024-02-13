import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {Onboarding} from 'react-native-onboarding-swiper';
// onBoarding screen LAB 
const Stack = createNativeStackNavigator();

function ScreenOne({navigation}) {
  return (
    <View style={styles.container}>
      <Text>
        Screen One 22
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
    backgroundColor: '#bea',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;

// <Stack.Screen name='Home' component={HomeView}></Stack.Screen> 
