import React, { FC } from 'react';
import Helmet from 'react-helmet';
// eslint-disable-next-line import/no-extraneous-dependencies
import { oc } from 'ts-optchain';
import { graphql, StaticQuery } from 'gatsby';
import { SiteMetadataQueryQuery } from '../../types/graphql-types';

type MetaProps = JSX.IntrinsicElements['meta'];

export interface ISeoProps {
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  title: string;
}

const SEO: FC<ISeoProps> = ({ lang, title }) => (
  <>
    <StaticQuery
      query={graphql`
            query SiteMetadataQuery {
              site {
                siteMetadata {
                  title
                  description
                  author
                }
              }
            }
          `}
      render={(data: SiteMetadataQueryQuery) => (
        <>
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s - ${oc(data.site).siteMetadata.title('')}`}
            meta={[
              {
                name: 'description',
                content: oc(data.site).siteMetadata.description(''),
              },
              {
                property: 'og:title',
                content: oc(data.site).siteMetadata.title(''),
              },
              {
                property: 'og:description',
                content: oc(data.site).siteMetadata.description(''),
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: oc(data.site).siteMetadata.author(''),
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: oc(data.site).siteMetadata.description(''),
              },
            ]}
          />
        </>
      )}
    />
  </>
);

export { SEO };
