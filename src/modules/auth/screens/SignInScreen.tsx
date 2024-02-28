import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {useAuthCredentials} from '../hooks/useAuthCredentials';
import {navigation} from '../../../lib/navigate';
import {Button} from '../../../components/Button';
import {Input} from '../../../components/Input';

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const signIn = useAuthCredentials(store => store.signIn);

  async function handleSignIn() {
    setIsLoading(true);

    try {
      await signIn({email, password});
    } catch {
      Alert.alert('erro');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <Input placeholder="Email" value={email} onChangeText={setEmail} />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />

      <Button isLoading={isLoading} onPress={handleSignIn}>
        Entrar
      </Button>

      <Button onPress={() => navigation.navigate('SignUp')}>
        Crate Account
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 24,
  },
});
