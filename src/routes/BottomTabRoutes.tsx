/**
 * Drawer Routes Component
 *
 * The BottomTabRoutes component defines the Bottom Tabs navigation using react native paper'.
 *
 * @component
 *
 * @returns {ReactNode} - The rendered BottomTabRoutes component.
 */

import {StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import Dashboard from '../screens/Dashboard';
import {BottomNavigation} from 'react-native-paper';
import Learn from '../screens/Learn';
import MarketPlace from '../screens/Marketplace';
import Community from '../screens/Community';

const BottomTabRoutes = () => {
  const [index, setIndex] = React.useState(0); // Add state for bottom tab index
  const [routes] = React.useState([
    {key: 'home', title: 'Home', focusedIcon: 'home', lazy: true},
    {key: 'learn', title: 'Learn', focusedIcon: 'book', lazy: true},
    {
      key: 'marketplace',
      title: 'Marketplace',
      focusedIcon: 'store',
      lazy: true,
    },
    {
      key: 'community',
      title: 'Community',
      focusedIcon: 'account-group',
      lazy: true,
    },
  ]);

  // Function to render the screen based on the index
  const renderScene = useCallback(
    BottomNavigation.SceneMap({
      home: Dashboard,
      learn: Learn,
      marketplace: MarketPlace,
      community: Community,
    }),
    [],
  );

  return (
    <>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default BottomTabRoutes;

const styles = StyleSheet.create({});
