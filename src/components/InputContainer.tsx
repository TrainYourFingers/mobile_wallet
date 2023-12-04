import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

type InputContainer = {
  children: React.ReactNode;
  style: any;
};

const InputContainer = ({children, style}: InputContainer) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={style}>{children}</KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default InputContainer;
