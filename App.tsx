import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigation';
import Provider from './src/utils/Provider';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
