import React from 'react';
import { Link } from 'umi';
import Layout from '@/layouts';
import styles from './index.less';

export default () => {
  return (
    <Layout className={styles.layout}>
      <h1 className={styles.title}>
        <Link to="/user">Page index</Link>
      </h1>
    </Layout>
  );
};
