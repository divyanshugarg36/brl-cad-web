import '../styles/index.scss';
import '../styles/globals.scss';
import '../i18n';
import 'modern-css-reset';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
