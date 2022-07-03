/* eslint-disable react/jsx-props-no-spreading */
import '../styles/css/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Footer from '~/components/Footer';
import MenuBar from '~/components/MenuBar';
import ContextProvider from '~/store/providerComposer';
import ColorSchemeCSSVariable from '~/styles/styleComponents/ColorSchemeCSSVariable';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import FontsHead from '~/styles/styleComponents/FontsHead';

import '../styles/css/fonts.css';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const [theme, setTheme] = useState<'DAY' | 'NIGHT'>('DAY');
  const { pathname } = useRouter();

  return (
    <ContextProvider>
      <>
        <FontsHead />
        {pathname === '/clock' && (
          <div className="container m-auto bg-componentsBgGrouped01 h-[100vh]">
            <Component {...pageProps} theme={theme} onChangeTheme={setTheme} />
          </div>
        )}
        {pathname !== '/clock' && (
          <div className="relative container m-auto bg-componentsBgGrouped01">
            <aside className="sticky bottom-0 left-0 top-0 w-[fit-content] z-10">
              <MenuBar theme={theme} onChangeTheme={setTheme} />
            </aside>

            <main style={{ marginTop: '-100vh' }}>
              <section className="pl-[180px] pr-24 py-[128px]">
                <Component {...pageProps} />
              </section>
            </main>
            <footer className="sticky bottom-0 left-0 right-0">
              <Footer />
            </footer>
          </div>
        )}
        <ColorSchemeCSSVariable theme={theme} />
      </>
    </ContextProvider>
  );
}

export default MyApp;
