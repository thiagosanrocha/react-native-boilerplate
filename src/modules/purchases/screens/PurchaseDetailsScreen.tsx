import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function PurchaseDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>PurchaseDetails</Text>
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
