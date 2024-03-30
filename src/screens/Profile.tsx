import {StyleSheet, View} from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, useTheme} from 'react-native-paper';
import {APP_STRINGS} from '../constants/AppConstants';

const Profile = () => {
  const {colors} = useTheme();
  return (
    <Wrapper style={styles.container}>
      <View
        style={[styles.iconWrapper, {backgroundColor: colors.surfaceDisabled}]}>
        <Ionicons name="person" size={28} color={colors.secondary} />
      </View>
      <Text variant="titleMedium">Profile screen</Text>
      <Text
        style={[styles.description, {color: colors.onSurfaceDisabled}]}
        variant="bodyMedium">
        {APP_STRINGS.EMPTY_DESC}
      </Text>
    </Wrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 80,
    width: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14,
  },
  description: {
    width: '70%',
    textAlign: 'center',
    paddingVertical: 12,
  },
});
