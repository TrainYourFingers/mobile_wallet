import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Button = {
  title: string;
  onPress: () => void;
  disabled: boolean;
};

const CustomButton = ({title, onPress, disabled}: Button) => {
  return (
    <Pressable
      style={[styles.button, {opacity: disabled ? 0.5 : 1}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5B259F',
    width: '60%',
    padding: 20,
    borderRadius: 15,
    display: 'flex',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
  },
});
