import { ChangeEvent, memo, useState, VFC } from 'react';
import { Box, ChakraProvider, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';

import theme from '../components/theme/theme';
import { PrimaryButton } from '../components/atomic/atoms/button/PrimaryButton';
import { useAuth } from '../components/hooks/useAuth';

const Login: VFC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] = useState('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <ChakraProvider theme={theme}>
      <Flex align='center' justify='center' h='100vh'>
        <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
          <Heading as='h1' size='lg' textAlign='center'>
            医師情報管理ツール
          </Heading>
          <Divider my={4} />
          <Stack spacing={6} py={4} px={10}>
            <Input placeholder='ユーザーID' value={userId} onChange={onChangeUserId} />
            <Input placeholder='パスワード' />
            <PrimaryButton disabled={userId === ''} loading={loading} onClick={onClickLogin}>
              ログイン
            </PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
});

export default Login;
