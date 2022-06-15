import '../styles/index.scss';
import '../i18n';
import 'modern-css-reset';

import type { AppProps } from 'next/app';

import { Layout } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
