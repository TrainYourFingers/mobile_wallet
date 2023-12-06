import {StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, createContext, useState} from 'react';

interface Every {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

export const Everything = createContext({} as Every);

const Provider = ({children}: any) => {
  const [token, setToken] = useState<string>('');
  return (
    <Everything.Provider value={{token, setToken}}>
      {children}
    </Everything.Provider>
  );
};

export default Provider;
