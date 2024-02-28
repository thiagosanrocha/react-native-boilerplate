import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CartItem} from '../components/CartItem';
import {navigation} from '../../../lib/navigate';

const productsMock = [
  {displayName: 'Apple iPhone 15 Pro Max', price: '$ 1,099.00'},
  {displayName: 'Apple MacBook Pro 16', price: '$ 3,099.00'},
  {displayName: 'Apple Vision Pro', price: '$ 3,499.00'},
];

export function CartScreen() {
  const [products, setProducts] = useState(productsMock);

  function handleDeleteProduct(displayName: string) {
    setProducts(currentProducts =>
      currentProducts.filter(product => product.displayName !== displayName),
    );
  }

  return (
    <View style={styles.container}>
      {products.map(product => (
        <CartItem
          key={product.displayName}
          onDelete={handleDeleteProduct}
          {...product}
        />
      ))}

      {products.length === 0 && (
        <View style={styles.emptyCart}>
          <Text>No products added to cart</Text>

          <Button
            title="Add Products"
            onPress={() => setProducts(productsMock)}
          />
        </View>
      )}

      <Button title="Go Back" onPress={navigation.goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  emptyCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
