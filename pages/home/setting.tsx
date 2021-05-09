import React, { memo, VFC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../../components/theme/theme';
import { Layout } from '../../components/atomic/template/Layout';

const Setting: VFC = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <Layout title="設定 | 医師情報管理ツール">
        
      </Layout>
      <p>Settingページです</p>
    </ChakraProvider>
  );
});

export default Setting;
