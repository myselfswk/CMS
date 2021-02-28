import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from "../Screens/Splash";
import Home from "../Screens/Home";
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/profile';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: null}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: null}} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;