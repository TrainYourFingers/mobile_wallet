import React, {useEffect, useState} from 'react';
import AfterAuth from './AfterAuth';
import BeforeAuth from './BeforeAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {Everything} from '../utils/Provider';

const index = () => {
  const {token, setToken} = useContext(Everything);
  useEffect(() => {
    const func = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken.toString());
      }
    };
    func();
  }, [token]);

  return <>{token ? <AfterAuth /> : <BeforeAuth />}</>;
};

export default index;
