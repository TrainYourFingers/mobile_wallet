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
import Email from '../assets/images/email.svg';
import Hidden from '../assets/images/hidden.svg';
import Password from '../assets/images/password.svg';

const baseURL = 'http://localhost:3000/';

const Login = ({navigation}: any) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
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
          <Text style={styles.text}>Immediately feel the</Text>
          <Text style={styles.text}>ease of transacting just </Text>
          <Text style={styles.text}>by registering </Text>
        </View>
        <View>
          <CustomInput
            dismissKeyboard={false}
            placeholder="Username"
            isHidden={false}
            setData={setUsername}
            leftIcon={<Username width={36} />}
          />
          <CustomInput
            dismissKeyboard={false}
            placeholder="Email"
            isHidden={false}
            setData={setEmail}
            leftIcon={<Email width={36} />}
          />
          <CustomInput
            dismissKeyboard={false}
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
            title="Register"
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
              You have account?{' '}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: '#81C2FF',
                  fontSize: 16,
                  fontFamily: 'Quicksand-Medium',
                }}>
                Login
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
