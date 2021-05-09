import React, { memo, VFC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../components/theme/theme';

const Login: VFC = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <p>Loginページです</p>
    </ChakraProvider>
  );
});

export default Login;
