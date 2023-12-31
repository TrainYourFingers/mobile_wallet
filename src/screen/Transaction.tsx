import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Back from '../assets/images/back.svg';
import Email from '../assets/images/email.svg';
import Cross from '../assets/images/delete.svg';
import Delete from '../assets/images/left-delete.svg';
import CustomInput from '../components/CustomInput';
import Number from '../components/Number';
import CustomButton from '../components/CustomButton';

const Transaction = ({navigation}: any) => {
  const [data, setData] = useState<string>('0');
  console.log(data);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white', padding: 20}}>
        <Back
          height={50}
          width={50}
          style={{backgroundColor: 'white'}}
          onPress={() => navigation.goBack()}
        />

        <View style={{marginTop: 10}}>
          <Text
            style={{
              marginVertical: 10,
              marginHorizontal: 5,
              fontFamily: 'Quicksand-Medium',
              fontSize: 16,
            }}>
            Receiver's Email :
          </Text>
          <CustomInput
            dismissKeyboard={true}
            placeholder="Email"
            setData={() => console.log('some')}
            isHidden={false}
            leftIcon={<Email />}
          />
        </View>
        <View>
          <Text
            style={{
              marginVertical: 10,
              marginHorizontal: 5,
              fontFamily: 'Quicksand-Medium',
              fontSize: 16,
            }}>
            Amount : <Text style={{color: '#8438FF'}}>NPR</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                textAlign: 'left',
                fontFamily: 'Rubik-SemiBold',
                paddingLeft: 20,
                fontSize: 40,
                color: '#2F1155',
                height: 100,
                flex: 1,
              }}
              value={`${data}`}
              showSoftInputOnFocus={false}
            />
            <Number
              setData={setData}
              value="-"
              icon={<Delete width={30} height={30} color="gray" />}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 40,
          }}>
          <View style={{justifyContent: 'space-between'}}>
            <Number setData={setData} value={1} />
            <Number setData={setData} value={4} />
            <Number setData={setData} value={7} />
            <Number setData={setData} value={'.'} />
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <Number setData={setData} value={2} />
            <Number setData={setData} value={5} />
            <Number setData={setData} value={8} />
            <Number setData={setData} value={0} />
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <Number setData={setData} value={3} />
            <Number setData={setData} value={6} />
            <Number setData={setData} value={9} />
            <Number
              setData={setData}
              value="x"
              icon={<Cross width={30} height={30} color={'#2F1155'} />}
            />
          </View>
        </View>
        <View>
          <CustomButton
            disabled={false}
            title="Transfer"
            onPress={() => console.log('clicked')}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
