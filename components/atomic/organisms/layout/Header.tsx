import { memo, VFC } from 'react';
import Link from 'next/link';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';

import { NavigationIconButton } from '../../atoms/button/NavigationIconButton';
import { NavigationDrawer } from '../../molecules/NavigationDrawer';

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as='nav' bg='teal.500' color='gray.50' align='center' justify='space-between'>
        <Flex as='a' align='center' mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading fontSize={{ base: 'md', md: 'lg' }} p={{ base: 3, md: 5 }}>
            <Link href='/home'>
              <a>医師情報管理ツール</a>
            </Link>
          </Heading>
        </Flex>
        <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link href='/home'>
              <a>ホーム</a>
            </Link>
          </Box>
          <Box pr={4}>
            <Link href='/home/information_management'>
              <a>登録一覧</a>
            </Link>
          </Box>
          <Box pr={4}>
            <Link href='/home/setting'>
              <a>設定</a>
            </Link>
          </Box>
          <Box pr={4}>
            <Link href='/'>
              <a>ログアウト</a>
            </Link>
          </Box>
        </Flex>
        <NavigationIconButton onOpen={onOpen} />
        <NavigationDrawer onClose={onClose} isOpen={isOpen} />
      </Flex>
    </>
  );
});
