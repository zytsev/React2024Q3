import ListCard from '../../pagesOld/Main/ListCard';
import { NextPageWithLayout } from '../_app';
import MainLayout from '../../../src/components/forpages/main/layout';
import { ReactElement } from 'react';
import Layout from '../../../src/components/forpages/layout';

const Page: NextPageWithLayout = () => {
  return <ListCard />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <MainLayout>{page}</MainLayout>
    </Layout>
  );
};

export default Page;
