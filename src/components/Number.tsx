import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Number = ({value, setData, icon}: any) => {
  return (
    <Pressable
      onPress={() => {
        if (value === 'x') {
          setData(0);
        } else {
          setData((prev: any) =>
            prev === 0 ? value : prev + value?.toString(),
          );
        }
      }}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#f2e3fc' : 'transparent',
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 30,
        },
      ]}>
      {value === 'x' ? (
        icon
      ) : (
        <Text style={{fontFamily: 'Quicksand-Bold', fontSize: 24}}>
          {value}
        </Text>
      )}
    </Pressable>
  );
};

export default Number;

const styles = StyleSheet.create({});
