import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Send from '../assets/images/send.svg';
import Receive from '../assets/images/receive.svg';

interface Notify {
  dateTime: Date;
  message: string;
  remarks: string;
  sent: boolean;
}

const Notify = ({dateTime, message, remarks, sent}: Notify) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
          width: 10,
        },
        shadowRadius: 10,
      }}>
      <Text
        style={{
          fontFamily: 'Quicksand-Medium',
          fontSize: 10,
          color: '#BDBDBD',
        }}>
        {dateTime.toDateString()}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Quicksand-SemiBold',
            color: '#363853',
            width: '85%',
          }}>
          {message}
        </Text>
        {sent ? (
          <Send height={24} width={24} />
        ) : (
          <Receive height={24} width={24} />
        )}
      </View>
      <Text
        style={{
          fontFamily: 'Quicksand-Medium',
          fontSize: 10,
          color: '#BDBDBD',
        }}>
        {`"${remarks}"`}
      </Text>
    </View>
  );
};

export default Notify;

const styles = StyleSheet.create({});
