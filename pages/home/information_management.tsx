import { Image } from '@chakra-ui/image';
import { Box, Stack, Wrap, WrapItem } from '@chakra-ui/layout';
import { memo, VFC } from 'react';

import { Layout } from '../../components/atomic/template/Layout';

const InformationManagement: VFC = memo(() => {
  return (
    <Layout title='登録一覧 | 医師情報管理ツール'>
      <Wrap>
        <WrapItem>
          <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md">
            <Stack textAlign="center">
              <Image borderRadius="full" boxSize="160px" src="https://source.unsplash.com/random" alt="プロフィール画像" />

            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
    </Layout>
  );
});

export default InformationManagement;
