import React, { FC } from 'react';
import { Layout, SEO, Stats, Testimonials } from '../components';

const About: FC = () => (
  <Layout>
    <SEO title="About Us" />
    <Testimonials />
    <Stats />
  </Layout>
);

export default About;
