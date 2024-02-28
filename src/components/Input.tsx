import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

type InputProps = TextInputProps;

export function Input({style, ...rest}: InputProps) {
  return <TextInput {...rest} style={[styles.container, style]} />;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    padding: 8,
    backgroundColor: '#ffffff',
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 8,
  },
});
