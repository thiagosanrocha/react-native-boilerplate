import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function PurchasesScreen() {
  return (
    <View style={styles.container}>
      <Text>Purchases</Text>
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
