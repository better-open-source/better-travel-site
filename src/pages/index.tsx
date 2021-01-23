import React from 'react';
import { Layout, SEO, Hero } from '../components';

const HomePage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
);

export default HomePage;
