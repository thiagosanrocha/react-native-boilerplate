import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function CartOrderDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>CartOrderDetails</Text>
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
