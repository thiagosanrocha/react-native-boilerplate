import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {navigation} from '../../../lib/navigate';

export function ProductListScreen() {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>

      <Button
        title="Product #1"
        onPress={() =>
          navigation.navigate('ProductDetails', {
            productId: '1',
          })
        }
      />

      <Button
        title="Product #2"
        onPress={() =>
          navigation.navigate('ProductDetails', {
            productId: '2',
          })
        }
      />

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
