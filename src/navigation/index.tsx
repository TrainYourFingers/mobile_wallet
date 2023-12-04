import React, {useState} from 'react';
import AfterAuth from './AfterAuth';
import BeforeAuth from './BeforeAuth';

const index = () => {
  const [token, setToken] = useState<boolean>(false);
  return <>{token ? <AfterAuth /> : <BeforeAuth />}</>;
};

export default index;
