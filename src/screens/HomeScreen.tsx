import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAuthCredentials} from '../modules/auth/hooks/useAuthCredentials';
import {Button} from '../components/Button';
import {navigation} from '../lib/navigate';

export function HomeScreen() {
  const signUp = useAuthCredentials(store => store.signUp);

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button onPress={signUp}>SignUp</Button>

      <Button onPress={() => navigation.navigate('Products')}>
        Go To Products
      </Button>

      <Button onPress={() => navigation.navigate('Cart')}>Go To Cart</Button>
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
