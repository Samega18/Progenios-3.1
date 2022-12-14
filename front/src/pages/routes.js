import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialPage from './initial';
import Preload from './preload';
import Login from './login';
import Register from './register';

import BarNavigate from './BarNavigate';

// Home
import Profile from './OtherPages/Home/Profile';
import MyProfile from './OtherPages/Home/MyProfile';
import MyAddress from './OtherPages/Home/Address';

const Stack = createNativeStackNavigator();

function Routes(){
  return (
   
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerShown: false}} initialRouteName='Preload'>
          <Stack.Screen name="Preload" component={Preload}/>
          <Stack.Screen name="Initial" component={InitialPage}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>

          <Stack.Screen name="BarNavigate" component={BarNavigate}/>

          {/* Home */}
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="MyProfile" component={MyProfile}/>
          <Stack.Screen name="MyAddress" component={MyAddress}/>

        </Stack.Navigator>
      </NavigationContainer>
  
  );
};

export default Routes;