/**
 * Drawer Routes Component
 *
 * The DrawerRoutes component defines the drawer navigation  using '@react-navigation/drawer'.
 * It includes screens for the My Profile My Orders My Activities screen.
 *
 * @component
 *
 * @returns {ReactNode} - The rendered DrawerRoutes component.
 */

import {StyleSheet, useColorScheme, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  DRAWER_LABELS,
  DRAWER_ROUTES,
  SCREEN_LABELS,
} from '../constants/AppConstants';
import Profile from '../screens/Profile';
import Activities from '../screens/Activities';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Orders from '../screens/Orders';
import * as customTheme from '../theme/Theme';
import {Text, useTheme} from 'react-native-paper';
import BottomTabRoutes from './BottomTabRoutes';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerRoutes = () => {
  const DrawerNavigator = createDrawerNavigator();
  const colorScheme = useColorScheme();
  const {colors} = useTheme();
  const theme =
    colorScheme === 'dark' ? customTheme.darkTheme : customTheme.lightTheme;

  return (
    // @ts-ignore
    <NavigationContainer theme={theme}>
      {/* Main Stack Navigator */}
      <DrawerNavigator.Navigator
        screenOptions={({navigation}) => ({
          headerLeft: props => (
            <Material
              style={{paddingLeft: 16}}
              color={colors.onBackground}
              name="menu"
              size={24}
              onPress={navigation.toggleDrawer}
            />
          ),
          drawerActiveBackgroundColor: colors.primaryContainer,
          drawerContentStyle: {backgroundColor: colors.surface},
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: colors.inverseSurface,
        })}
        initialRouteName={DRAWER_ROUTES.HOME}>
        {/* Home Screen */}
        <DrawerNavigator.Screen
          name={DRAWER_ROUTES.HOME}
          component={BottomTabRoutes}
          options={{
            drawerLabel: () => <Text>{DRAWER_LABELS.HOME}</Text>,
            lazy: true,
            headerTitle: () => (
              <Text variant="titleLarge">{SCREEN_LABELS.HOME_LABEL}</Text>
            ),
            drawerIcon: ({color, size}) => (
              <Material name="home" color={colors.primary} size={18} />
            ),
          }}
        />

        <DrawerNavigator.Screen
          name={DRAWER_ROUTES.PROFILE}
          component={Profile}
          options={{
            drawerLabel: () => <Text>{DRAWER_LABELS.PROFILE}</Text>,
            lazy: true,
            headerTitle: () => (
              <Text variant="titleLarge">{SCREEN_LABELS.PROFILE_LABEL}</Text>
            ),
            drawerIcon: ({color, size}) => (
              <Material name="account" color={colors.primary} size={18} />
            ),
          }}
        />
        <DrawerNavigator.Screen
          name={DRAWER_ROUTES.ORDERS}
          component={Orders}
          options={{
            drawerLabel: () => <Text>{DRAWER_LABELS.ORDERS}</Text>,
            lazy: true,
            headerTitle: () => (
              <Text variant="titleLarge">{SCREEN_LABELS.ORDERS_LABEL}</Text>
            ),
            drawerIcon: ({color, size}) => (
              <Material name="cart" color={colors.primary} size={18} />
            ),
          }}
        />

        <DrawerNavigator.Screen
          name={DRAWER_ROUTES.ACTIVITIES}
          component={Activities}
          options={{
            drawerLabel: () => <Text>{DRAWER_LABELS.ACTIVITIES}</Text>,
            lazy: true,
            headerTitle: () => (
              <Text variant="titleLarge">{SCREEN_LABELS.ACTIVITIES_LABEL}</Text>
            ),
            drawerIcon: ({color, size}) => (
              <Material
                name="calendar-check"
                color={colors.primary}
                size={18}
              />
            ),
          }}
        />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default DrawerRoutes;

const styles = StyleSheet.create({});
