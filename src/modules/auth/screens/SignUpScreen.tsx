import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
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
