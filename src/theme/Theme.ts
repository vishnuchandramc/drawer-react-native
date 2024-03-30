import {DefaultTheme, MD3LightTheme, useTheme} from 'react-native-paper';
import {Dimensions, Platform} from 'react-native';

// Define a generic ThemeInterface with colors and fonts
export interface ThemeInterface<colors extends object, fonts extends object> {
  custom: string;
  colors: colors;
  dark?: boolean;
  fonts: object;
}

// Define the light theme with color overrides and font styles
const lightTheme = {
  ...MD3LightTheme,
  custom: 'property',
  colors: {
    ...MD3LightTheme.colors,
    primary: 'rgb(177, 46, 0)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(255, 219, 209)',
    onPrimaryContainer: 'rgb(59, 9, 0)',
    secondary: 'rgb(119, 87, 78)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(255, 219, 209)',
    onSecondaryContainer: 'rgb(44, 21, 15)',
    tertiary: 'rgb(108, 93, 47)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(246, 225, 166)',
    onTertiaryContainer: 'rgb(35, 27, 0)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 251, 255)',
    onBackground: 'rgb(32, 26, 24)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(32, 26, 24)',
    surfaceVariant: 'rgb(245, 222, 216)',
    onSurfaceVariant: 'rgb(83, 67, 63)',
    outline: 'rgb(133, 115, 110)',
    outlineVariant: 'rgb(216, 194, 188)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(54, 47, 45)',
    inverseOnSurface: 'rgb(251, 238, 235)',
    inversePrimary: 'rgb(255, 181, 160)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(251, 241, 242)',
      level2: 'rgb(249, 235, 235)',
      level3: 'rgb(246, 229, 227)',
      level4: 'rgb(246, 226, 224)',
      level5: 'rgb(244, 222, 219)',
    },
    surfaceDisabled: 'rgba(32, 26, 24, 0.12)',
    onSurfaceDisabled: 'rgba(32, 26, 24, 0.38)',
    backdrop: 'rgba(59, 45, 42, 0.4)',
  },

  fonts: {
    // Font styles for different text sizes and types as per react native paper docs
    bodyLarge: {
      fontSize: DefaultTheme.fonts.bodyLarge.fontSize,
      fontFamily: Platform.OS == 'android' ? 'Gilroy-Medium' : 'Gilroy-Medium',
    },
    bodyMedium: {
      fontSize: DefaultTheme.fonts.bodyMedium.fontSize,
      fontFamily: Platform.OS == 'android' ? 'Gilroy-Medium' : 'Gilroy-Medium',
    },
    bodySmall: {
      fontSize: DefaultTheme.fonts.bodySmall.fontSize,
      fontFamily: Platform.OS == 'android' ? 'Gilroy-Medium' : 'Gilroy-Medium',
    },
    default: {
      ...DefaultTheme.fonts.default,
      fontFamily: Platform.OS == 'android' ? 'Gilroy-Medium' : 'Gilroy-Medium',
    },
    displayLarge: {
      fontSize: DefaultTheme.fonts.displayLarge.fontSize,
      fontFamily: Platform.OS == 'android' ? 'Gilroy-Bold' : 'Gilroy-Bold',
    },
    displayMedium: {
      fontSize: DefaultTheme.fonts.displayMedium.fontSize,
      fontFamily: Platform.OS == 'android' ? 'Gilroy-Bold' : 'Gilroy-Bold',
    },
    displaySmall: {
      fontSize: DefaultTheme.fonts.displaySmall.fontSize,
      fontFamily: Platform.OS == 'android' ? 'Gilroy-Bold' : 'Gilroy-Bold',
    },
    headlineLarge: {
      fontSize: DefaultTheme.fonts.headlineLarge.fontSize,
      fontFamily: Platform.OS == 'android' ? 'Gilroy-Bold' : 'Gilroy-Bold',
    },
    headlineMedium: {
      fontSize: DefaultTheme.fonts.headlineMedium.fontSize,
      fontFamily:
        Platform.OS == 'android' ? 'Gilroy-SemiBold' : 'Gilroy-SemiBold',
    },
    headlineSmall: {
      fontSize: DefaultTheme.fonts.headlineSmall.fontSize,
      fontFamily:
        Platform.OS == 'android' ? 'Gilroy-SemiBold' : 'Gilroy-SemiBold',
    },
    labelLarge: {
      fontSize: DefaultTheme.fonts.labelLarge.fontSize,
      fontFamily: Platform.OS == 'android' ? 'Gilroy-Medium' : 'Gilroy-Medium',
    },
    labelMedium: {
      fontSize: DefaultTheme.fonts.labelMedium.fontSize,
      fontFamily:
        Platform.OS == 'android' ? 'Gilroy-Regular' : 'Gilroy-Regular',
    },
    labelSmall: {
      fontSize: DefaultTheme.fonts.labelSmall.fontSize,
      fontFamily:
        Platform.OS == 'android' ? 'Gilroy-Regular' : 'Gilroy-Regular',
    },
    titleLarge: {
      fontSize: DefaultTheme.fonts.titleLarge.fontSize,
      fontFamily:
        Platform.OS == 'android' ? 'Gilroy-SemiBold' : 'Gilroy-SemiBold',
    },
    titleMedium: {
      fontSize: DefaultTheme.fonts.titleMedium.fontSize,
      fontFamily:
        Platform.OS == 'android' ? 'Gilroy-SemiBold' : 'Gilroy-SemiBold',
    },
    titleSmall: {
      fontSize: DefaultTheme.fonts.titleSmall.fontSize,
      fontFamily:
        Platform.OS == 'android' ? 'Gilroy-SemiBold' : 'Gilroy-SemiBold',
    },
  },
};

// Define the dark theme by extending the default theme and reusing lightTheme fonts
const darkTheme = {
  // Custom color overrides for dark theme
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 181, 160)',
    onPrimary: 'rgb(96, 21, 0)',
    primaryContainer: 'rgb(135, 33, 0)',
    onPrimaryContainer: 'rgb(255, 219, 209)',
    secondary: 'rgb(231, 189, 178)',
    onSecondary: 'rgb(68, 42, 34)',
    secondaryContainer: 'rgb(93, 64, 55)',
    onSecondaryContainer: 'rgb(255, 219, 209)',
    tertiary: 'rgb(217, 197, 141)',
    onTertiary: 'rgb(59, 47, 5)',
    tertiaryContainer: 'rgb(83, 70, 25)',
    onTertiaryContainer: 'rgb(246, 225, 166)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(32, 26, 24)',
    onBackground: 'rgb(237, 224, 221)',
    surface: 'rgb(32, 26, 24)',
    onSurface: 'rgb(237, 224, 221)',
    surfaceVariant: 'rgb(83, 67, 63)',
    onSurfaceVariant: 'rgb(216, 194, 188)',
    outline: 'rgb(160, 140, 135)',
    outlineVariant: 'rgb(83, 67, 63)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(237, 224, 221)',
    inverseOnSurface: 'rgb(54, 47, 45)',
    inversePrimary: 'rgb(177, 46, 0)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(43, 34, 31)',
      level2: 'rgb(50, 38, 35)',
      level3: 'rgb(57, 43, 39)',
      level4: 'rgb(59, 45, 40)',
      level5: 'rgb(63, 48, 43)',
    },
    surfaceDisabled: 'rgba(237, 224, 221, 0.12)',
    onSurfaceDisabled: 'rgba(237, 224, 221, 0.38)',
    backdrop: 'rgba(59, 45, 41, 0.4)',
  },
  fonts: {...lightTheme.fonts},
};

// Check if the screen width is greater than or equal to 768 (tablet)
const isTablet = Dimensions.get('screen').width >= 768;

export {lightTheme, darkTheme, isTablet};
