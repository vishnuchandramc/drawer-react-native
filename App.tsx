import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import * as customTheme from './src/theme/Theme';

import DrawerRoutes from './src/routes/DrawerRoutes';

const App = () => {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === 'dark' ? customTheme.darkTheme : customTheme.lightTheme;
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <DrawerRoutes />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
