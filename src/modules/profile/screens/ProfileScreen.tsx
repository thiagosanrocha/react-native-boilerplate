import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {navigation} from '../../../lib/navigate';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      <Button title="Go Back" onPress={navigation.goBack} />
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
