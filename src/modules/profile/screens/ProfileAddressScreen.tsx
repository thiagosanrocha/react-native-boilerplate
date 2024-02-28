import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function ProfileAddressScreen() {
  return (
    <View style={styles.container}>
      <Text>ProfileAddress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
});
