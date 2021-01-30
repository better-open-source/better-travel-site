import React, { FC } from 'react';
import { Email, Layout, SEO } from '../components';

const Contact: FC = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Email />
  </Layout>
);

export default Contact;
