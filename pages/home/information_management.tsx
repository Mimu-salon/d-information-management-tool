import { memo, VFC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/layout';

import { Layout } from '../../components/atomic/template/Layout';
import { DoctorCard } from '../../components/atomic/organisms/infomation_management/DoctorCard';

const InformationManagement: VFC = memo(() => {
  return (
    <Layout title='登録一覧 | 医師情報管理ツール'>
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <DoctorCard imageUrl="https://source.unsplash.com/random" doctorName="●● ●●" hospital="●●●●●●病院" department="●●内科"/>
        </WrapItem>
      </Wrap>
    </Layout>
  );
});

export default InformationManagement;
