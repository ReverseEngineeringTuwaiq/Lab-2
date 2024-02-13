import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscountCalculator from './discountCalc'; // Your separate discount calculator component
import Main from './Main';
import Profile from './Profile';
import VatCalc from './vatCalc';

const Stack = createNativeStackNavigator();

  const App = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#000', // Consistent header color
              },
              headerTintColor: '#FFD700', // Consistent header text color
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >

            <Stack.Screen
              name="Main"
              component={Main}
              options={{ title: 'Home' }}
            />

            <Stack.Screen
              name="DiscountCalculator"
              component={DiscountCalculator}
              options={{ title: 'Discount Calculator' }}
            />

            <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: 'Profile'}}
            />

            <Stack.Screen
            name="VatCalc"
            component={VatCalc}
            options={{ title: 'Vat Calculator'}}
            />
            {/* Add additional Stack.Screen entries for other screens as needed */}
          </Stack.Navigator>
        </NavigationContainer>
      );
    };
    

export default App;