import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Notify from '../components/Notify';
import Back from '../assets/images/back.svg';

const Notifcation = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <Back
        height={50}
        width={50}
        style={{backgroundColor: 'white'}}
        onPress={() => navigation.goBack()}
      />
      <View>
        <Text
          style={{
            fontFamily: 'Rubik-Bold',
            fontSize: 24,
            color: '#130138',
            textAlign: 'center',
          }}>
          Notification
        </Text>
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Quicksand-Medium',
              color: '#363853',
              fontSize: 16,
              margin: 10,
            }}>
            Today
          </Text>
          <Notify
            dateTime={new Date()}
            message="You spent Rp 32.000 for Coffee Cetar back Tugu Sentral"
            remarks="Bought Drink"
            sent={true}
          />
          <Notify
            dateTime={new Date()}
            message="You received Rp 100.000 from Alexandr Gibson Jogja "
            remarks="Check"
            sent={false}
          />
        </View>
        <View style={{padding: 20}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Quicksand-Medium',
              color: '#363853',
              fontSize: 16,
              marginBottom: 10,
            }}>
            Yesterday
          </Text>
          <Notify
            dateTime={new Date()}
            message="You received Rp 100.000 from Alexandr Gibson Jogja "
            remarks="Check"
            sent={false}
          />
          <Notify
            dateTime={new Date()}
            message="You spent Rp 32.000 for Coffee Cetar back Tugu Sentral"
            remarks="Bought Drink"
            sent={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifcation;

const styles = StyleSheet.create({});
