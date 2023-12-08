import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'
import HomeScreen from '../screens/HomeScreen'
import FavoriteScreens from '../screens/FavoritesScreen'
import UserScreen from '../screens/UserScreen'
import CustomIcon from '../components/CustomIcon'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView overlayColor='' blurAmount={20} style={styles.BlurViewStyles} />
        ),
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomIcon name="home" size={25} color={
            focused ? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex} />
        )
      }}></Tab.Screen>
      <Tab.Screen name="Favorite" component={FavoriteScreens} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomIcon name="like" size={25} color={
            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
        )
      }}></Tab.Screen>
      <Tab.Screen name="User" component={UserScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name="person" size={25} color={
            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
        )
      }}></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent'
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default TabNavigator;