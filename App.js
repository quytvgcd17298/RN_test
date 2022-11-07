import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InputScreen from './Screen/InputScreen';
import ScrollView from './Screen/ScrollView'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FlatView from './Screen/FlatView';
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
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Scroll') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name == "Flat List") {
            iconName = focused ? 'reorder-four' : 'reorder-four-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Input" component={InputScreen} />
      <Tab.Screen name="Scroll" component={ScrollView} />
      <Tab.Screen name="Flat List" component={FlatView} />
      <Tab.Screen name="Section List" component={SectionView} />
      </Tab.Navigator>
    </NavigationContainer>
  )};

