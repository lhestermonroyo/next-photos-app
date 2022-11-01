import '../styles/globals.css';
import 'antd/dist/antd.css';
import dynamic from 'next/dynamic';
import React from 'react';
const ProgressBar = dynamic(() => import('../components/ProgressBar'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ProgressBar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
