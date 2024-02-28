import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {navigation} from '../lib/navigate';

export function GlobalModal() {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={navigation.goBack} />
      <Text>GlobalModal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
