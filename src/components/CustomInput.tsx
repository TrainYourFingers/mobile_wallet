import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';

type Input = {
  placeholder: string;
  isHidden: boolean;
  setData: Dispatch<SetStateAction<string>>;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};

const CustomInput = ({
  placeholder,
  isHidden,
  setData,
  rightIcon,
  leftIcon,
}: Input) => {
  return (
    <View style={styles.inputContainer}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', flex: 1, gap: 10}}>
        <View>{leftIcon}</View>
        <TextInput
          style={styles.inputBox}
          placeholder={placeholder}
          secureTextEntry={isHidden}
          onChangeText={text => setData(text)}
          onBlur={Keyboard.dismiss}
        />
      </View>

      {rightIcon && <View>{rightIcon}</View>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  inputBox: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 16,
    flex: 1,
  },
});
