/* eslint-disable react/jsx-props-no-spreading */
import '../styles/css/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';

import SideBar from '~/components/SideBar';

import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <main>
      <aside>
        <SideBar />
      </aside>
      <Component {...pageProps} />;
    </main>
  );
}

export default MyApp;
