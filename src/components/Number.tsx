import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Number = ({value, setData, icon}: any) => {
  return (
    <Pressable
      onPress={() => {
        if (value === 'x') {
          setData(0);
        } else if (value === '-') {
          let stringValue: string;
          let newData: number;
          setData((prev: any) => {
            stringValue = prev.toString();
            newData = parseInt(stringValue.slice(0, stringValue.length - 1));
            if (!newData) {
              return 0;
            } else return newData;
          });
        } else {
          setData((prev: any) =>
            prev == '0' ? value : prev + value?.toString(),
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
      {value === 'x' || value === '-' ? (
        icon
      ) : (
        <Text
          style={{
            fontFamily: 'Quicksand-Bold',
            fontSize: 24,
            textAlign: 'center',
          }}>
          {value}
        </Text>
      )}
    </Pressable>
  );
};

export default Number;

const styles = StyleSheet.create({});
