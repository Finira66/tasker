import React from 'react';
import styles from './Home.module.scss'
import Layout from '@/components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Hello page</h1>
      </div>
    </Layout>
  )
}

export default Home;