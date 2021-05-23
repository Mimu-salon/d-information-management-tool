import { memo, useCallback, VFC } from 'react';
import {  Wrap, WrapItem } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';


import { Layout } from '../../components/atomic/template/Layout';
import { DoctorCard } from '../../components/atomic/organisms/infomation_management/DoctorCard';
import { DoctorDetailModal } from '../../components/atomic/organisms/infomation_management/DoctorDetailModal';

const InformationManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickDoctor = useCallback(() => onOpen(), []);

  return (
    <Layout title='登録一覧 | 医師情報管理ツール'>
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <DoctorCard
            imageUrl='https://source.unsplash.com/random'
            doctorName='●● ●●'
            hospital='●●●●●●病院'
            department='●●内科'
            onClick={onClickDoctor}
          />
        </WrapItem>
      </Wrap>
      <DoctorDetailModal isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
});

export default InformationManagement;
