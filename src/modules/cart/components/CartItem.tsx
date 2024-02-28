import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type CartItemProps = {
  displayName: string;
  price: string;
  onDelete?(displayName: string): void;
};

export function CartItem({displayName, price, onDelete}: CartItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.image} />

      <View style={styles.details}>
        <Text>{displayName}</Text>
        <Text>{price}</Text>
      </View>

      {onDelete && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(displayName)}>
          <Text style={styles.deleteLabel}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  image: {
    width: 54,
    height: 54,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  details: {
    flex: 1,
    gap: 4,
  },
  deleteButton: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9a4a477',
    borderRadius: 8,
  },
  deleteLabel: {
    color: '#ec4d4d',
    fontSize: 12,
  },
});
