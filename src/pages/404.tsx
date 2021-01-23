import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { SEO } from '../components';

const PageNotFound: React.FC = () => (
  <Layout>
    <div className="content">
      <SEO title="404" />
      <h1>Page 404 - not found</h1>
      <p className="lead">Page does not exist</p>
    </div>
  </Layout>
);

export default PageNotFound;
