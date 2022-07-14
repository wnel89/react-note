import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ThunderTab from '../screen/ThunderTab';
import HotdealTab from '../screen/HotdealTab';
import TopLogo from './topLogo';

const Tab = createMaterialTopTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <TopLogo />
      <Tab.Navigator>
        <Tab.Screen name="Thunder" component={ThunderTab} />
        <Tab.Screen name="Hot Deal" component={HotdealTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
