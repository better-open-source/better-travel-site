import React, { FC } from 'react';
import { Layout, SEO, Trips } from '../components';

const TripsPage: FC = () => (
  <Layout>
    <SEO title="Trips" />
    <Trips heading="Our Favorite Destinations" />
  </Layout>
);

export default TripsPage;
