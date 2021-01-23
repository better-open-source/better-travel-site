import React from 'react';
import { Layout, SEO } from '../components';

const Page2: React.FC = () => (
  <Layout>
    <div className="content">
      <SEO title="Page 2" />
      <h2>Page 2</h2>
      <p className="lead">You've made it to page 2.</p>
    </div>
  </Layout>
);

export default Page2;
