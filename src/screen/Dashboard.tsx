import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Username from '../assets/images/username.svg';
import Bell from '../assets/images/bell.svg';
import PurpleBlock from '../assets/images/purpleBlock.svg';
import Transfer from '../assets/images/transfer-outline.svg';
import Payout from '../assets/images/payout-outline.svg';
import Payment from '../assets/images/payment-outline.svg';
import Topup from '../assets/images/topup-outline.svg';

const Dashboard = ({navigation}: any) => {
  const currentScheme = useColorScheme();
  const [isDark, setIsDark] = useState<boolean>(false);
  const [iconColor, setIconColor] = useState<boolean>(false);

  const amount = '4000.00';

  useEffect(() => {
    if (currentScheme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [currentScheme]);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1, padding: 20}}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? 'black' : 'white'}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{display: 'flex', gap: -5}}>
          <Text
            style={{
              fontFamily: 'Rubik-SemiBold',
              fontSize: 28,
              color: '#130138',
            }}>
            Wallet
          </Text>
          <Text
            style={{
              fontFamily: 'Quicksand-Medium',
              fontSize: 18,
              color: '#BDBDBD',
            }}>
            Active
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Pressable
            onPress={() => navigation.navigate('Notification')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 44,
              backgroundColor: '#EEF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Bell width={32} height={32} />
          </Pressable>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 44,
              backgroundColor: '#EEE',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Username width={32} height={32} />
          </View>
        </View>
      </View>
      <View style={{marginVertical: 40}}>
        <PurpleBlock width="100%" style={{position: 'relative'}} />
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            padding: 40,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 44,
              width: '100%',
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  color: 'white',
                  fontSize: 16,
                  lineHeight: 27,
                }}>
                Balance
              </Text>
              <Text
                style={{
                  fontFamily: 'Quicksand-Bold',
                  color: 'white',
                  fontSize: 24,
                  lineHeight: 27,
                }}>
                रु 4455.40
              </Text>
            </View>
            <View>
              <View>
                <Text
                  style={{
                    fontFamily: 'Quicksand-Bold',
                    color: 'white',
                    fontSize: 16,
                    lineHeight: 27,
                  }}>
                  Card
                </Text>
                <Text
                  style={{
                    fontFamily: 'Quicksand-Bold',
                    color: 'white',
                    fontSize: 24,
                    lineHeight: 27,
                  }}>
                  Prime Bank
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 25,
              elevation: 10,
              shadowColor: 'black',
              shadowOffset: {
                height: 10,
                width: 10,
              },
              shadowRadius: 10,
            }}>
            <Transfer width={44} height={44} />
          </Pressable>
          <Text
            style={{
              fontFamily: 'Quicksand-Medium',
              fontSize: 13,
              color: '#8438FF',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Transfer
          </Text>
        </View>
        <View>
          <Pressable
            onPress={() => navigation.navigate('Transaction')}
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 25,
              elevation: 10,
              shadowColor: 'black',
              shadowOffset: {
                height: 10,
                width: 10,
              },
              shadowRadius: 10,
            }}>
            <Payment width={44} height={44} />
          </Pressable>
          <Text
            style={{
              fontFamily: 'Quicksand-Medium',
              fontSize: 13,
              color: '#8438FF',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Payment
          </Text>
        </View>
        <View>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 25,
              elevation: 10,
              shadowColor: 'black',
              shadowOffset: {
                height: 10,
                width: 10,
              },
              shadowRadius: 10,
            }}>
            <Payout width={44} height={44} />
          </Pressable>
          <Text
            style={{
              fontFamily: 'Quicksand-Medium',
              fontSize: 13,
              color: '#8438FF',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Payout
          </Text>
        </View>
        <View>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 25,
              elevation: 10,
              shadowColor: 'black',
              shadowOffset: {
                height: 10,
                width: 10,
              },
              shadowRadius: 10,
            }}>
            <Topup width={44} height={44} />
          </Pressable>
          <Text
            style={{
              fontFamily: 'Quicksand-Medium',
              fontSize: 13,
              color: '#8438FF',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Top Up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
