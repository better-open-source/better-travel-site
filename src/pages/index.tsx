import { Stats } from 'fs';
import React from 'react';
import { Layout, SEO, Hero, Footer, Email } from '../components';

const HomePage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    {/* <Email /> Разобраться */}
    <Footer />
  </Layout>
);

export default HomePage;
