import React, { Fragment } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { } from '../Screens';
import ButtomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name='ButtomNavigation' component={ButtomNavigation} />
      </Stack.Navigator>
    </Fragment>
  )
}

export default StackNavigation