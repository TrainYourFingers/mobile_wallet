import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import InputContainer from '../components/InputContainer';
import Username from '../assets/images/username.svg';
import Hidden from '../assets/images/hidden.svg';
import Password from '../assets/images/password.svg';

const baseURL = 'http://localhost:3000/';

const Login = ({navigation}: any) => {
  const [email, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secure, setSecure] = useState<boolean>(true);

  const userLogin = async () => {
    try {
      console.log('clicked');
      const response = await fetch('http://localhost:3000/users/');

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('From Catch Block', error);
    }
  };

  return (
    <View style={{padding: 20, height: '100%', backgroundColor: 'white'}}>
      <InputContainer style={styles.inputContainer}>
        <View>
          <Text style={styles.text}>Welcome back</Text>
          <Text style={styles.text}>to Simple Wallet</Text>
        </View>
        <View>
          <CustomInput
            placeholder="Username"
            isHidden={false}
            setData={setUsername}
            leftIcon={<Username width={36} />}
          />
          <CustomInput
            placeholder="Password"
            isHidden={secure}
            setData={setPassword}
            leftIcon={<Password width={36} />}
            rightIcon={
              <Hidden
                width={36}
                color={secure ? 'black' : 'grey'}
                onPress={() => setSecure(!secure)}
              />
            }
          />
        </View>

        <View>
          <CustomButton
            title="Login"
            onPress={userLogin}
            disabled={!email ? true : !password ? true : false}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Quicksand-Medium',
                fontSize: 16,
                color: '#BDBDBD',
                textAlign: 'center',
                marginVertical: 10,
              }}>
              Don't have an account yet?{' '}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  color: '#81C2FF',
                  fontSize: 16,
                  fontFamily: 'Quicksand-Medium',
                }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </InputContainer>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: 'Rubik-SemiBold',
    color: '#2F1155',
    textAlign: 'center',
    lineHeight: 27,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
