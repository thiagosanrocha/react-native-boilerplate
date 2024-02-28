import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {navigation} from '../../../lib/navigate';

type RouteParams = RouteProp<{
  params: {
    productId: string;
  };
}>;

export function ProductDetailsScreen() {
  const {params} = useRoute<RouteParams>();

  return (
    <View style={styles.container}>
      <Text>ProductDetails #{params.productId}</Text>

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
