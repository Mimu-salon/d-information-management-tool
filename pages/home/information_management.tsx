import { memo, VFC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../../components/theme/theme';
import { Layout } from '../../components/atomic/template/Layout';

const InformationManagement: VFC = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <Layout title='医師一覧 | 医師情報管理ツール'>
        <p>InformationManagementページです</p>
      </Layout>
    </ChakraProvider>
  );
});

export default InformationManagement;
