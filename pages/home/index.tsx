import { memo, VFC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../../components/theme/theme';
import { Layout } from '../../components/atomic/template/Layout';

const Home: VFC = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <Layout title='ホーム | 医師情報管理ツール'>
        <p>Homeページです</p>
      </Layout>
    </ChakraProvider>
  );
});

export default Home;
