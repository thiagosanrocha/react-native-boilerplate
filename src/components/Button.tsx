import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

export function Button({isLoading, children, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      {isLoading && <ActivityIndicator size="small" />}

      {!isLoading && <Text style={styles.label}>{children}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: '100%',
    backgroundColor: '#111010',
    borderRadius: 8,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
