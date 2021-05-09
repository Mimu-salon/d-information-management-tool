import { memo, VFC } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Button, IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Drawer, DrawerBody, DrawerContent } from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/hooks';

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as='nav' bg='teal.500' color='gray.50' align='center' justify='space-between'>
        <Flex as='a' align='center' mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }} p={{ base: 3, md: 5 }}>
            医師情報管理ツール
          </Heading>
        </Flex>
        <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}></Box>
        </Flex>
        <IconButton
          aria-label='メニューボタン'
          icon={<HamburgerIcon />}
          size='sm'
          variant='unstyled'
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%'>ホーム</Button>
            <Button w='100%'>医師一覧</Button>
            <Button w='100%'>設定</Button>
            <Button w='100%'>ログアウト</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});