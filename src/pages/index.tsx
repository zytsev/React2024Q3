import type { ReactElement } from 'react';
import '../components/forpages/index.css';
import Layout from '../../src/components/forpages/layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <></>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
