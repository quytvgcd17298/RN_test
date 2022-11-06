import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InputScreen from './Screen/InputScreen';
import Test from './Screen/Test'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SectionView from './Screen/SectionView';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Input') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Test') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Input" component={InputScreen} />
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="Section" component={SectionView} />
      </Tab.Navigator>
    </NavigationContainer>
  )};

