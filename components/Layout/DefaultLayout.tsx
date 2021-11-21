import NavBar from '@components/NavBar';
import { isServer } from '@utils/isServer';
import { Layout } from 'antd';
import { observer } from 'mobx-react';
import dynamic from 'next/dynamic';
import NextHead from 'next/head';
import React from 'react';

const { Content } = Layout;
const isProdution = process.env.NODE_ENV === 'production';

const AntFooter = dynamic(() => import('@components/Footer'), { ssr: false });

export function reportWebVitals(metric: { label: string }) {
  if (metric.label === 'custom') {
    console.log(metric);
  }
}

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <NextHead>
        <meta name="msvalidate.01" content="70D794CFD1BC46E43E6BC2236189BAD2" />
        <meta
          property="og:url"
          content={!isServer ? window.location.toString() : undefined}
          key="url"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content="On Air Parking" key="og:title" />
        <meta
          property="og:description"
          content="On Air Parking"
          key="og:description"
        />
        <meta
          property="og:image"
          content="https://www.onairparking.com/assets/public/image/logo_app.png"
          key="og:image"
        />
      </NextHead>
      <NavBar />
      <Content className="site-layout">{children}</Content>
      <AntFooter />
    </Layout>
  );
};

export default observer(DefaultLayout);
