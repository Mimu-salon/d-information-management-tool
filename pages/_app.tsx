import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../components/theme/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
