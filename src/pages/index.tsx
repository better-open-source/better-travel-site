import React from 'react';
import { Layout, SEO, Hero, Footer, Email, Trips } from '../components';

const HomePage: React.FC = () => (
  <Layout>
    <SEO title='Home' />
    <Hero />
    <Trips heading='Our Favorite Destinations' />
    <Email /> 
  </Layout>
);

export default HomePage;
