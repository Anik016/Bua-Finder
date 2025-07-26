import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import NotFound from './screens/404notFound';
import Home from './screens/Home';
import More from './screens/More';
import {Octicons} from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';
import Post from './screens/Post';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Reels from './screens/Reels';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIndex = ({ navigation }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        const iconMap = {
          Home: 'home',
          More: 'three-bars',
          Post: 'diff-added',
          Search: 'search',
          Profile: 'person',
          Reels: 'video',
        };
        return <Octicons name={iconMap[route.name]} size={24} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 60,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarItemStyle: {
        paddingVertical: 5,
      },
      headerTitle: route.name === 'Home' ? 'BuaFinder' : (route.name === 'Search' ? '' : route.name),
      headerRight: () => (
        <>
        {route.name === 'Home' && (
          <>
          <Pressable onPress={() => {navigation.navigate('NotFound')}} style={styles.headerRight}>
            <Octicons name="heart" size={24} color="black" />
          </Pressable>
          <Pressable onPress={() => {navigation.navigate('NotFound')}} style={styles.headerRight}>
            <Octicons name="paper-airplane" size={24} color="black" />
          </Pressable>
          </>
        )}
        {route.name === 'Search' && (
          <Pressable onPress={() => {navigation.navigate('NotFound')}} style={styles.searchInput}>
            <Octicons name="search" size={15} color="black" />
            <Text>   Search</Text>
          </Pressable>
        )}
        {route.name === 'Post' && (
          <Pressable onPress={() => {navigation.navigate('NotFound')}} style={styles.headerRight}>
            <Octicons name="device-camera" size={24} color="black" />
          </Pressable>
        )}
        {route.name === 'Reels' && (
          <Pressable onPress={() => {navigation.navigate('NotFound')}} style={styles.headerRight}>
            <Octicons name="versions" size={24} color="black" />
          </Pressable>
        )}
        {route.name === 'Profile' && (
          <Pressable onPress={() => {navigation.navigate('More')}} style={styles.headerRight}>
            <Octicons name="three-bars" size={24} color="black" />
          </Pressable>
        )}
        </>
      ),
      })}
    >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Post" component={Post} />
        <Tabs.Screen name="Reels" component={Reels} />
        <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  )
}

const Tab = () => {
  return (
    <Stack.Navigator  
      initialRouteName='BuaFinder'
      screenOptions={({ route }) => ({
        headerShown: route.name !== 'BuaFinder',
      })}
    >
      <Stack.Screen name="BuaFinder" >
        {props => <TabIndex {...props} />}
      </Stack.Screen>
      <Stack.Screen name="NotFound" component={NotFound} />
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  )
}

export default Tab

const styles = StyleSheet.create({
  searchInput: {
    height: 30,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginRight: 33,
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    padding: 5,
  },
})